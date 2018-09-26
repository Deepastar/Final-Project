import React, { Component } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css"
import "./Appointment.css"
import API from "../../util/API";

class Appointment extends Component {
    state = {
        time: "",
        day: "",
        service: "",
        availTimes: ["10:00 AM", "11:00 AM", "12:00 PM"],
        availServices: ["Quick Wash", "Premium Wash", "Ultra Premium Wash", "Factory Detail"],
        isLoggedIn: false,
        userName:"",
        appoinmentCreationStatus: false
    }

    componentDidMount(){
        // Check if the user is logged in.
        this.setLoginStatus();
    }

    setLoginStatus = () => {
        var token = localStorage.getItem("id_token");
        if( token !== null){
            var userName = localStorage.getItem("userName");
            this.setState({isLoggedIn: true, userName: userName});
        }
    }

    selectDate = () => {
        var yesterday = Datetime.moment().subtract(1, 'day');
        var valid = function( current ){
            return current.isAfter( yesterday );
        };
        return (
          <div>
            <p>Please Select a day:</p>
            <Datetime isValidDate={ valid } timeFormat={false} onChange={this.onDateChange} value={this.state.day}/>
          </div>
        );
      }
    
    onDateChange = day => {
        console.log("Day: " + Datetime.moment(day).format("YYYY-MM-DD"));
        this.setState({day:day});
    }
        
    handleTimeChange = (event) => {
        this.setState({time: event.target.value});
    }

    handleServiceChange = (event) => {
        this.setState({service: event.target.value});
    }

    handleSubmit = (event) => {
        console.log("Login status: " + this.state.isLoggedIn)
        
        if(this.state.isLoggedIn){
            /*
        Route Map
            Appointment.js
                |
                 --> API.js(createAppointment)
                    |
                     --> routes/index.js (/appointment)
                        |
                         --> routes/api/AppointmentApi.js ( /create )
                             |
                              --> controllers/AppointmentController.js (create)

        */
            API.createAppointment(this.state.userName, localStorage.getItem("id_token"), this.state.day, this.state.time)
            .then(res =>{
                if(typeof res.data !== "undefined"){
                    this.setState({appoinmentCreationStatus: true});
                }
            })
        }else{
            this.props.history.push(`/auth`);
        }
        event.preventDefault();
    }
    
    displayDropDown = () => {
        return(
            <div>
            <p>
            Please pick a time:
            </p>
         
          <select value={this.state.time} onChange={this.handleTimeChange}>
            {
                this.state.availTimes.map(function(item) {
                    return (<option value={item}>{item}</option>);
                })
            }
          </select>
          </div>
        
        );
    }

    displayServices = () => {
        return(
            <div>
            <p>
            Please pick a Service:
            </p>
         
          <select value={this.state.sevice} onChange={this.handleServiceChange}>
            {
                this.state.availServices.map(function(item) {
                    return (<option value={item}>{item}</option>);
                })
            }
          </select>
          </div>
        
        );
    }

    render() {
        return (
            <div className="text-center mt-5">
                <h1>Appointment</h1>
                <div>
                    <p>
                        Make Appointment
                    </p>
                    <form onSubmit={this.handleSubmit}>
                    <div className="text-left row">
                        <div className="col-3">
                            {this.selectDate()}
                        </div>
                        <div className="col-3">
                            {this.displayDropDown()}
                        </div>
                        <div className="col-3">
                            {this.displayServices()}
                        </div>
                        <div className="col-3">
                            <p>&nbsp;</p>
                            <input type="submit" value="Submit"/>
                        </div>
                    </div> 
                    {this.state.appoinmentCreationStatus ? <SuccessAlert/> : null}
                    </form>
                </div>
            </div>
        );
    }
}

class SuccessAlert extends Component{
    render(){
        return (
            <div className="row">
                <p className="text-success mt-2">Appointment SuccessFully Created!!!</p>
            </div>
        );
    }
}

export default Appointment;