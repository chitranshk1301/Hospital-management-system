const express = require("express");

const DiseaseCtrl = require("../controllers/diseases-ctrl");
// const patientRouter = require("./patient-router").Router();
const diseaseRouter = express.Router({mergeParams: true});
const router = express.Router();

// nesting the routers by attaching them as middleware
// patientRouter.use("/:id/diseases", diseaseRouter);

router.post("/disease", DiseaseCtrl.createDisease);
router.put("/disease/:id", DiseaseCtrl.updateDisease);
router.delete("/disease/:id", DiseaseCtrl.deleteDisease);
router.get("/disease/:id", DiseaseCtrl.getDiseaseById);
router.get("/diseases", DiseaseCtrl.getDiseases);

module.exports = router;