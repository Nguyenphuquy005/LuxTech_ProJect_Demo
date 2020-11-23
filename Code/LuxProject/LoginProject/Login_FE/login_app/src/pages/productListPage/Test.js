import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';
import { Row, Form, FormGroup, Label, Input, Button, ListGroupItemHeading } from 'reactstrap';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
class PopUpButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: true,
            product: [],
            value: '132',
        };
        this.onClick = this.onClick.bind(this)

    }


    onClick() {
        axios.get(`http://localhost:9000/api/tutorials/${this.props.id}`)
            .then(res => {
                console.log(res.data);
                this.setState({ product: res.data });
            })

        this.setState({ check: !this.state.check })
    }

    edit() {
        const currentTutorial = {
            title: this.title.value,
            description: this.description.value
        };
        axios.put(`http://localhost:9000/api/tutorials/${this.props.id}`, currentTutorial)
            .then(res => {
                this.props.afterEditPerson(res.data.data)

            })

    }


    checkState(st) {

        if (st == true) {

            return 'none'
        } else {
            return 'block'
        }
    }
    render() {

        const style = {
            backgroundColor: 'gray',
            display: this.checkState(this.state.check),
            position: 'fixed',
            margin: '',
        };
        return (
            <div>

                <button onClick={this.onClick} type="button" className="btn btn-danger">Edit</button>
                <div id="popup" style={style}>
                    <form>
                        <div className="form-group">
                            <label >ID</label>
                            <input type="text" className="form-control"
                                placeholder={this.state.product._id} value={this.state.product._id} />

                        </div>
                        <div className="form-group">
                            <label >Title</label>
                            <input type='text'

                                ref={(c) => this.title = c} name="title"
                                placeholder={this.state.product.title}
                            />

                        </div>
                        <div className="form-group">
                            <label >Description</label>
                            <input
                                ref={(c) => this.description = c} name="description"
                                placeholder={this.state.product.description} />
                        </div>
                        <button onClick={() => {
                            this.edit();
                            document.getElementById('popup').style.display = 'none'
                        }} type="button" className="btn btn-primary">
                            Edit
                        </button>
                        <button onClick={this.onClick} className="btn btn-primary">Test</button>
                        <button onclick="document.getElementById('popup').style.display='none'" className="btn btn-primary">Close</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default withRouter(PopUpButton);

