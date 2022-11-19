import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertPatient = payload => api.post(`/patient`, payload)
export const getAllPatients = () => api.get(`/patients`)
export const updatePatientById = (id, payload) => api.put(`/patient/${id}`, payload)
export const deletePatientById = id => api.delete(`/patient/${id}`)
export const getPatientById = id => api.get(`/patient/${id}`)


// export const insertDisease = payload => api.post(`/disease`, payload)
// export const getAllDiseases = () => api.get(`/diseases`)
// export const updateDiseaseById = (id, payload) => api.put(`/disease/${id}`, payload)
// export const deleteDiseaseById = id => api.delete(`/disease/${id}`)
// export const getDiseaseById = id => api.get(`/disease/${id}`)


const apis = {
    insertPatient,
    getAllPatients,
    updatePatientById,
    deletePatientById,
    getPatientById,
}

export default apis
