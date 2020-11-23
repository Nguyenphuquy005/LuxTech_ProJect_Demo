import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Modal from 'react-modal';
import { Row, Form, FormGroup, Label, Input, Button, ListGroupItemHeading } from 'reactstrap';
import {
    PopupboxManager,
    PopupboxContainer
} from 'react-popupbox';
import Test from "././Test"

export default class PersonList extends React.Component {

    state = {
        persons: []
    }

    afterEditPerson = (person) => {
        const newPersionWithoutEditedOne = this.state.persons.filter(p => p._id !== person._id)
        const newPersons = [
            ...newPersionWithoutEditedOne,
            person
        ]
        this.setState({
            persons: newPersons

        })
    }

    delete = (id) => {
        console.log('this is:', id);
        axios.delete(`http://localhost:9000/api/tutorials/${id}`)
            .then(res => {
                const { persons } = this.state;
                const newPersons = persons.filter(p => p._id !== id)
                this.setState({
                    persons: newPersons
                })
                // console.log(res);
                // console.log(res.data);
                // this.componentDidMount()
            })
    }


    componentDidMount() {
        axios.get(`http://localhost:9000/api/tutorials`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
                console.log(persons);
            })
    }


    render() {
        return (
            <div>


                <div className="container mt-3">

                    <button type="button" className="btn btn-danger"><Link to="/add">Thêm sản phẩm</Link></button>
                    <div className="panel panel-default">
                        <div className="panel-heading">Danh sách sản phẩm</div>
                        <div className="panel-body">
                            <table style={{ borderStyle: 'solid' }}>
                                <tr>
                                    {this.state.persons.map(person =>
                                        <tr>
                                            <th style={{ borderStyle: 'solid' }}>{person._id}</th>
                                            <th>{person.title}</th>
                                            <th style={{ borderStyle: 'solid' }}>{person.description}</th>
                                            <th><button onClick={() => this.delete(person._id)} type="button" className="btn btn-danger">Delete </button> </th>
                                            <th>

                                                <Test id={person._id} afterEditPerson={this.afterEditPerson} />
                                            </th>
                                        </tr>

                                    )
                                    }
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <div>



                </div>

            </div >

        )
    }


}

