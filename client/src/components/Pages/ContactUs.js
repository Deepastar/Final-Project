import React, { Component } from 'react';
import API from "../../util/API";

class ContactUs extends Component{
    state = {
        nameForm:"",
        emailForm:"",
        comment:""
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        API.createContacts({fullName: this.state.nameForm, email: this.state.emailForm, comment: this.state.comment})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    
    _handleInputChange = (inp) => {
        this.setState(
            {
                [inp.target.name]: inp.target.value
            }
        )
    }

    render(){
        return(
            <div className="form mt-5">
                <h1>Contact Us</h1>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="name" className="form-control" name="nameForm" placeholder="Enter your Name" onChange={this._handleInputChange}></input>
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" className="form-control" name="emailForm" placeholder="Enter your Email ID" onChange={this._handleInputChange}></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label>Message:</label>
                        <div className="comment mt-3">
                            <textarea rows="4" cols="50" className="form-control" name="comment" form="usrform" onChange={this._handleInputChange}></textarea>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default ContactUs;