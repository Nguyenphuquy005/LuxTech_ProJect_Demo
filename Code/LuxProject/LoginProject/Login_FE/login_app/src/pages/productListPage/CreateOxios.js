import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";


class PersonList extends React.Component {

    state = {
        title: '',
        description: '',
        published: true
    }

    handleChange = event => {
        this.setState({ redirect: true });
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(event.target.name);
    }

    handleSubmit = event => {

        event.preventDefault();
        const user = {
            title: this.state.title,
            description: this.state.description
        };
        console.log(user, '===>>>');
        axios.post(`http://localhost:9000/api/tutorials`, user)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.props.history.push('/axios')
            })
    }

    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                     <input type="text" name="title" onChange={this.handleChange} />
                    </label>
                    <label>
                        description:
                     <input type="text" name="description" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default withRouter(PersonList);