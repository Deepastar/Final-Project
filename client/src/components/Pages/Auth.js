import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Auth extends Component{
    state = {
        userName: "",
        password:""
    }

    _handleInputChange = (inp) => {
        this.setState(
            {
                [inp.target.name]: inp.target.value
            }
        )
    }

    handleFormSubmit = (inp) => {
        inp.preventDefault();
    }

    componentDidMount(){

    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <h1> Login </h1>
                    <form>
                        <input placeholder="userName" name="userName" type="text" onChange={this._handleInputChange}/>
                        <input placeholder="Password" name="password" type="password" onChange={this._handleInputChange}/>
                        <button onClick={this.handleFormSubmit}>Login</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Auth;
