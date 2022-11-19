import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

import ReactTable from "react-table";
import "react-table/react-table.css";

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

const View = styled.div`
    color: #0000ff;
    cursor: pointer;
`


class UpdatePatient extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/patients/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeletePatient extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to remove this patient ${this.props.id} permanently?`,
            )
        ) {
            api.deletePatientById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class PatientById extends Component {
    viewUser = event => {
        event.preventDefault()

        window.location.href = `/patient/${this.props.id}`
    }

    render() {
        return <View onClick={this.viewUser}>View</View>
    }
}


class PatientsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            patients: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllPatients().then(patients => {
            this.setState({
                patients: patients.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { patients, isLoading } = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'First Name',
                accessor: 'firstName',
                filterable: true,
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
                filterable: true,
            },
            {
                Header: 'Date of Birth',
                accessor: 'dateOfBirth',
                filterable: true,
            },
            {
                Header: 'Sex',
                accessor: 'sex',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeletePatient id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdatePatient id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <PatientById id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!patients.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={patients}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default PatientsList