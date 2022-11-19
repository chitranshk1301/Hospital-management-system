import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavBar } from "../components";
import { PatientsInsert, PatientsList, PatientsUpdate, PatientById } from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/patients/list" exact element={<PatientsList />} />
				<Route path="/patients/create" exact element={<PatientsInsert />} />
				<Route path="/patients/update/:id" exact element={<PatientsUpdate />} />
				<Route path="/patient/:id" exact element={<PatientById />} />
			</Routes>
		</Router>
	);
}

export default App;