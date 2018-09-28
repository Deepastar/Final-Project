import React, { Component } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css"
import "./Appointment.css"
import API from "../../util/API";
import _ from "underscore";

class Appointment extends Component {
    state = {
        rawDay:"",
        time: "",
        day: "",
        service: "",
        availTimes: {times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]},
        currentAvailTimes: {times: []},
        availServices: ["Quick Wash", "Premium Wash", "Ultra Premium Wash", "Factory Detail"],
        fullDays: [],
        isLoggedIn: false,
        userName: "",
        appoinmentCreationStatus: false,
        appts: []
    }

    /*trying to get appt time by filtering the scheduled appoitments

    try with _.differece() method
      |-->
     availTimes: ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"],
     scheduledTimes: ["11:00 AM", "02:00 PM"],
     newavailTimes = _.difference()

    var c = _.difference(a.map(e => e.id), b.map(e =>e.id));-------main fun
    ------this is for ref----
    _.difference = restArguments(function(array, rest) {
    rest = flatten(rest, true, true);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
    });
    refer:https://stackoverflow.com/questions/13147278/using-underscores-difference-method-on-arrays-of-objects
    
    try with   _.without method
    
     _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
     => [2, 3, 4]
    */

    componentDidMount() {
        // Check if the user is logged in.
        this.setLoginStatus();
        
    }

    getfullDays = () => {
        var yesterday = Datetime.moment().subtract(1, 'day');
        var fDays = [];
        API.getAllAppts(Datetime.moment(yesterday).format("YYYY-MM-DD"))
        .then(res => {
            res.data.map(item => item.count >= 9 ? fDays.push(item._id) : console.log("Res: " + item.count + ":" + item._id) )
            this.setState({fullDays: fDays});
        })
        .catch(err=> console.log(err));
    }

    setLoginStatus = () => {
        var token = localStorage.getItem("id_token");
        if (token !== null) {
            var userName = localStorage.getItem("userName");
            this.setState({ isLoggedIn: true, userName: userName });
            this.getUserAppts();
        }
        this.getfullDays();
    }

    selectDate = () => {
        var yesterday = Datetime.moment().subtract(1, 'day');
        var fulArray = this.state.fullDays;

        var valid = function (current) {
        
            var str = current.format("YYYY-MM-DD");
            if( current.isAfter(yesterday) && !(_.contains(fulArray, str)))
                return true;
            else
                return false;
        };

        return (
            <div>
                <p>Please Select a day:</p>
                
                <Datetime isValidDate={valid} timeFormat={false} onChange={this.onDateChange} value={this.state.day} />
            </div>
        );
    }

    getIcon = () => {
        return (<i class="far fa-calendar-alt"></i>);
    }
    onDateChange = day => {
        this.setState({rawDay: day, appoinmentCreationStatus: false});
        day = Datetime.moment(day).format("YYYY-MM-DD");
        console.log("Day: " + day);

        this.setState({ day: day});
        var bookedArray = [];
        var availArray = [];
        API.getApptPerDay(day)
        .then(res => {
            res.data.map(bTime => bookedArray.push(bTime.time));
            availArray = this.state.availTimes.times;
            var currArray = _.difference(availArray, bookedArray);

            this.setState({currentAvailTimes: {times: currArray}});
            this.state.currentAvailTimes.times.map( myTime => console.log(myTime));
        })
        .catch(err => console.log(err));
    }

    handleTimeChange = (event) => {
        this.setState({ time: event.target.value, appoinmentCreationStatus: false });
    }

    handleServiceChange = (event) => {
        this.setState({ service: event.target.value, appoinmentCreationStatus: false });
    }

    handleSubmit = (event) => {
        console.log("Login status: " + this.state.isLoggedIn)

        if (this.state.isLoggedIn) {
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
            API.createAppointment(this.state.userName, localStorage.getItem("id_token"), this.state.rawDay, this.state.day, this.state.time, this.state.service)
                .then(res => {
                    if (typeof res.data !== "undefined") {
                        this.setState({ appoinmentCreationStatus: true });
                    }
                })
        } else {
            this.props.history.push(`/auth`);
        }
        
        this.getUserAppts();
        event.preventDefault();
    }

    displayDropDown = () => {
        return (
            <div>
                <p>
                    Please pick a time:
                </p>

                <select value={this.state.time} onClick={this.handleTimeChange} onChange={this.handleTimeChange}>
                    {
                        this.state.currentAvailTimes.times.map(function (item) {
                            return (<option value={item}>{item}</option>);
                        })
                    }
                </select>
            </div>

        );
    }

    getUserAppts = () => {
        var userName = localStorage.getItem("userName");
        API.getApptByUser(userName)
        .then(res => { 
            var localArr = []; 
            res.data.map(item => localArr.push(item)); 
            this.setState({appts: localArr}); 
        })
        .catch(err => console.log(err));
    }

    displayAppointments = () => {

        return (
            <div className="mt-4 text-left">
                <h3>Existing Appointments</h3>
                <div>
                    <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Day</th>
                            <th scope="col">Time</th>
                            <th scope="col">Service</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.appts.map(function(item){
                            return(
                            <tr>  
                                <td>{item.day}</td> 
                                <td>{item.time}</td>  
                                <td>{item.service}</td> 
                            </tr>);
                        })
                    }
                    </tbody>
                    </table>
                </div>
            </div>
                
            );
    }
   
    displayServices = () => {
        return (
            <div>
                <p>
                    Please pick a Service:
            </p>

                <select value={this.state.sevice} onChange={this.handleServiceChange}>
                    {
                        this.state.availServices.map(function (item) {
                                return (<option value={item} key={item}>{item}</option>);
                        })
                    }
                </select>
            </div>

        );
    }

    render() {
        return (
            // <div className="container">
            <div className="text-center mt-5">
                {/* <h1>Appointment</h1> */}
                <div>
                    {/* <p>
                        Make Appointment
                    </p> */}
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
                                <input type="submit" value="Submit" />
                            </div>
                        </div>
                        {this.state.appoinmentCreationStatus ? <SuccessAlert /> : null}
                        {this.state.isLoggedIn ? this.displayAppointments() : null}
                    </form>
                </div>
            </div>
            // </div>
        );
    }
}

class SuccessAlert extends Component {
    render() {
        return (
            <div className="row">
                <p className="text-success mt-2">Appointment SuccessFully Created!!!</p>
            </div>
        );
    }
}

export default Appointment;