import React from 'react';
import UserService from '../service/userService';
import './register.css';
const userService = new UserService();

export default class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submit = () => {
        let userData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        }
        console.log(userData);
        userService.register(userData).then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="form">
                <h3>Register</h3>
                <input type="text" name="firstName" placeholder="Enter First Name" onChange={this.handleChange} />
                <input type="text" name="lastName" placeholder="Enter Last Name" onChange={this.handleChange} />
                <input type="text" name="email" placeholder="Enter Email Id" onChange={this.handleChange} />
                <button onClick={this.submit}>Submit</button>
            </div>
        )
    }
}