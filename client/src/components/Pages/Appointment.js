import React, { Component } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css"
import "./Appointment.css"

class Appointment extends Component {
    state = {
        time: "",
        day: "",
        service: "",
        availTimes: ["10:00 AM", "11:00 AM", "12:00 PM"],
        availServices: ["Quick Wash", "Premium Wash", "Ultra Premium Wash", "Factory Detail"]
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
    
    onDateChange = day => this.setState({day:day});
    onTimeChange = time => this.setState({time:time});
    
    handleTimeChange = (event) => {
        this.setState({time: event.target.value});
    }

    handleServiceChange = (event) => {
        this.setState({service: event.target.value});
    }

    handleSubmit = (event) => {
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
                    </form>
                </div>
            </div>
        );
    }
}

export default Appointment;