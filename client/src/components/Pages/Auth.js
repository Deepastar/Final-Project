import React, { Component } from "react";
import API from "../../util/API";
// import { Link } from 'react-router-dom';

class Auth extends Component{
    state = {
        userName: "",
        password: "",
        email:"",
        conPassword:"",
        existingUser: false,
        passwordMatch: false,
        loginFailed: false,
        createUserStatus: false
    }

    _handleInputChange = (inp) => {
        this.setState(
            {
                [inp.target.name]: inp.target.value
            }
        )
    }

    handleSignIn = (event) => {
        event.preventDefault();
        this.findUser(false);
    }

    handleSignUp = (event) => {
        event.preventDefault();
        this.findUser(true);
    }

    componentDidMount(){

    }

    findUser = (createUserFlag)=>{
        API.getUser(this.state.userName)
        .then(res => {
            if(res.data != null){
                this.setState({ existingUser: true });
                if(!createUserFlag){
                    if(res.data.password === this.state.password){
                        this.setState({passwordMatch: true});
                    } else{
                        this.setState({loginFailed: true});
                    }
                }
            } else{
                if(!createUserFlag){
                    this.setState({loginFailed: true});
                } else{
                    this.createUser();
                }
            }
        })
        .catch(err => console.log(err));
    };

    createUser = () => {
        API.createUser(this.state.userName, this.state.email, this.state.password)
        .then(res =>{
            this.setState({existingUser:false});
            this.setState({createUserStatus: true});
            console.log(res.json);
        })
        .catch(err => console.log(err));
    };

    render(){
        return(
            <React.Fragment>
                <div>
                    <h1> SignIn/SignUp </h1>
                    <div className="row mt-4">
                        <div className="col-sm-6">
                            <h2>Sign In</h2>
                            <form id="sign-in-form">
                                <div className="row mt-2 ml-2">
                                <input placeholder="userName" name="userName" type="text" onChange={this._handleInputChange}/>
                                </div>
                                <div className="row mt-2 ml-2">
                                <input placeholder="Password" name="password" type="password" onChange={this._handleInputChange}/>
                                </div>
                                <div className="row mt-2 ml-2">
                                <button onClick={this.handleSignIn}>Sign In</button>
                                </div>
                            </form>
                            {this.state.loginFailed ? <LoginFailedAlert/>:null}
                        </div>

                        <div className="col-sm-6">
                            <h2>Sign Up</h2>
                            <form id="sign-up-form">
                                <div className="row mt-2 ml-2">
                                <input placeholder="userName" name="userName" type="text"  onChange={this._handleInputChange}/>
                                </div>

                                <div className="row mt-2 ml-2">
                                <input placeholder="email" name="email" type="text"  onChange={this._handleInputChange}/>
                                </div>

                                <div className="row mt-2 ml-2">
                                <input placeholder="Password" name="password" type="password"  onChange={this._handleInputChange}/>
                                </div>
                                <div className="row mt-2 ml-2">
                                <input placeholder="Confirm Password" name="conPassword" type="password"  onChange={this._handleInputChange}/>
                                </div>

                                <div className="row mt-2 ml-2">
                                <button onClick={this.handleSignUp}>Sign Up</button>
                                </div>
                            </form>
                            {this.state.existingUser ? <ShowAlert/> : null}
                            {this.state.createUserStatus? <CreateSuccess/>:null}
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

class ShowAlert extends Component{
    render(){
        return (
            <div>
                <p className="text-danger mt-2">User Name Already Exists!!!</p>
            </div>
        );
    }
}

class CreateSuccess extends Component{
    render(){
        return (
            <div>
                <p className="text-success mt-2">Login Created Successfully!!!</p>
            </div>
        );
    }
}

class LoginFailedAlert extends Component{
    render(){
        return (
            <div>
                <p className="text-danger mt-2">Login Failed. Invalid User Name/Password !!!</p>
            </div>
        );
    }
}

export default Auth;
