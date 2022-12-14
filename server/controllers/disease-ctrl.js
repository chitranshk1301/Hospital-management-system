const Disease = require('../models/disease-model')
const db = require('../db')

createDisease = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a disease',
        })
    }

    const disease = new Disease(body)

    if (!disease) {
        return res.status(400).json({ success: false, error: err })
    }

    disease
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: disease._id,
                symptoms: disease.symptoms,
                Patient: disease.belongsToId,
                message: 'Disease added!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Disease not added!',
            })
        })
}

updateDisease = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Disease.findOne({ _id: req.params.id }, (err, disease) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Disease not found!',
            })
        }
        disease.name = body.name
        disease.symptoms = body.symptoms
        disease
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: disease._id,
                    message: 'Disease updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Disease not updated!',
                })
            })
    })
}

deleteDisease = async (req, res) => {
    await Disease.findOneAndDelete({ _id: req.params.id }, (err, disease) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!disease) {
            return res
                .status(404)
                .json({ success: false, error: `Disease not found` })
        }

        return res.status(200).json({ success: true, data: disease })
    }).catch(err => console.log(err))
}

getDiseaseById = async (req, res) => {
    await Disease.findOne({ _id: req.params.id }, (err, disease) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!disease) {
            return res
                .status(404)
                .json({ success: false, error: `Disease not found` })
        }
        return res.status(200).json({ success: true, data: disease })
    }).catch(err => console.log(err))
}

getDiseases = async (req, res) => {
    await Disease.find({ belongsToId: req.params.belongsToId }, (err, diseases) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!diseases.length) {
            return res
                .status(404)
                .json({ success: false, error: `Disease not found` })
        }
        return res.status(200).json({ success: true, data: diseases })
    }).catch(err => console.log(err))
}


module.exports = {
    createDisease,
    updateDisease,
    deleteDisease,
    getDiseases,
    getDiseaseById,
}