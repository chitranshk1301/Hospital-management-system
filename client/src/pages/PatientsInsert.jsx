import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class PatientsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            sex: '',
            // diseases: '',
        }
    }

    handleChangeInputFirstName = async event => {
        const firstName = event.target.value
        this.setState({ firstName })
    }

    handleChangeInputLastName = async event => {
        const lastName = event.target.value
        this.setState({ lastName })
    }

    handleChangeInputDateOfBirth = async event => {
        const dateOfBirth = event.target.value
        this.setState({ dateOfBirth })
    }

    handleChangeInputSex = async event => {
        const sex = event.target.value
        this.setState({ sex })
    }

    handleIncludePatient = async () => {
        const { firstName, lastName, dateOfBirth, sex } = this.state
        // const arrayTime = dateOfBirth.split('/')
        const payload = { firstName, lastName, dateOfBirth, sex }

        await api.insertPatient(payload).then(res => {
            window.alert(`Patient added successfully`)
            this.setState({
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                sex: '',
            })
        })
    }

    render() {
        const { firstName, lastName, dateOfBirth, sex } = this.state
        return (
            <Wrapper>
                <Title>Add Patient</Title>

                <Label>First Name: </Label>
                <InputText
                    type="text"
                    value={firstName}
                    onChange={this.handleChangeInputFirstName}
                />

                <Label>Last Name: </Label>
                <InputText
                    type="text"
                    value={lastName}
                    onChange={this.handleChangeInputLastName}
                />

                <Label>Date of Birth: </Label>
                <InputText
                    type="date"
                    value={dateOfBirth}
                    onChange={this.handleChangeInputDateOfBirth}
                />

                <Label>Sex: </Label>
                <InputText
                    type="text"
                    value={sex}
                    onChange={this.handleChangeInputSex}
                />

                <Button onClick={this.handleIncludePatient}>Add Patient</Button>
                <CancelButton href={'/patients'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default PatientsInsert