import React, { Component } from "react";
import API from "../../util/API";
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';

class Auth extends Component{
    state = {
        userName: "",
        password: "",
        existingUser: false,
        passwordMatch: false,
        loginFailed: false,
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
        this.findUser();
    }


    // componentDidMount(){

    // }

    renderRedirect = () => {
          return <Redirect to='/aboutus' />
    }

    findUser = ()=>{
        API.getUser(this.state.userName)
        .then(res => {
            if(res.data != null && (res.data.password === this.state.password)){
                this.setState({passwordMatch: true});
                this.setState({ existingUser: true });
                this.props.history.push(`/`)
            } else{
                this.setState({loginFailed: true});
            }
        })
        .catch(err => console.log(err));
    };

    render(){
        return(
            <React.Fragment>
                <div>
                    <h1> SignIn </h1>
                    <div className="row mt-4">
                        <div className="col-sm-6">
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
                            <Link to="/signUp" className={window.location.pathname === "/signUp" ? "nav-link active": "nav-link"}>
                                Not a member? Sign up.
                            </Link>
                            {this.state.loginFailed ? <LoginFailedAlert/>:null}
                            {this.state.passwordMatch ? <LoginSuccessAlert/>:null}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
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

class LoginSuccessAlert extends Component{
    render(){
        return (
            <div>
                <p className="text-success mt-2">Login Success!!!</p>
            </div>
        );
    }
}

export default Auth;
