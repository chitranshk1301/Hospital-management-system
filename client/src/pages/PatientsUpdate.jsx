import React, { useEffect } from "react";
import api from "../api";
import { useParams } from "react-router-dom";

import styled from "styled-components";

const Title = styled.h1.attrs({
	className: "h1",
})``;

const Wrapper = styled.div.attrs({
	className: "form-group",
})`
	margin: 0 30px;
`;

const Label = styled.label`
	margin: 5px;
`;

const InputText = styled.input.attrs({
	className: "form-control",
})`
	margin: 5px;
`;

const Button = styled.button.attrs({
	className: `btn btn-primary`,
})`
	margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
	className: `btn btn-danger`,
})`
	margin: 15px 15px 15px 5px;
`;

function PatientsUpdate(props) {
	let { id } = useParams();
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [dateOfBirth, setDateOfBirth] = React.useState("");
	const [sex, setSex] = React.useState("");

	React.useEffect(() => {
		api.getPatientById(id).then((patient) => {
			setFirstName(patient.data.data.firstname);
			setLastName(patient.data.data.lastname);
			setDateOfBirth(patient.data.data.dateOfBirth);
			setSex(patient.data.data.sex);
		});
	}, [id]);

	const handleUpdatePatient = async () => {
		const payload = {
			firstName,
			lastName,
			dateOfBirth,
			sex,
		};

		await api.updatePatientById(id, payload
			).then((res) => {
				window.alert(`Patient updated successfully`);
				setFirstName("");
				setLastName("");
				setDateOfBirth("");
				setSex("");
			});
	};

	useEffect(() => {
		handleUpdatePatient();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Wrapper>
			<Title>Update Patient</Title>

			<Label>First Name: </Label>
			<InputText
				type="text"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			/>

			<Label>Last Name: </Label>
			<InputText
				type="text"
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			/>

			<Label>Date of Birth: </Label>
			<InputText
				type="date"
				value={dateOfBirth}
				onChange={(e) => setDateOfBirth(e.target.value)}
			/>

			<Label>Sex: </Label>
			<InputText
				type="text"
				value={sex}
				onChange={(e) => setSex(e.target.value)}
			/>

			<Button onClick={handleUpdatePatient}>Update Patient</Button>
			<CancelButton href={"/patients/list"}>Cancel</CancelButton>
		</Wrapper>
	);

};

export default PatientsUpdate;
