import React, { useEffect } from "react";
import api from "../api";
import { useParams } from "react-router-dom";

function PatientById() {
	let { id } = useParams();
	const [patient, setPatient] = React.useState({});

	useEffect(() => {
		api.getPatientById(id).then((patient) => {
			setPatient(patient.data.data);
		});
	}, [id]);

	return (
		<div>
			<h1>Patient {id} </h1>
			<div>
				<p>First Name: {patient.firstName}</p>
				<p>Last Name: {patient.lastName}</p>
				<p>Date of Birth: {patient.dateOfBirth}</p>
				<p>Sex: {patient.sex}</p>
			</div>
		</div>
	);
}

export default PatientById;
