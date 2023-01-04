const express = require("express");

const DiseaseCtrl = require("../controllers/disease-ctrl");
const router = express.Router();

router.post("/disease", DiseaseCtrl.createDisease);
router.put("/disease/:id", DiseaseCtrl.updateDisease);
router.delete("/disease/:id", DiseaseCtrl.deleteDisease);
router.get("/disease/:id", DiseaseCtrl.getDiseaseById);
router.get("/diseases", DiseaseCtrl.getDiseases);

module.exports = router;