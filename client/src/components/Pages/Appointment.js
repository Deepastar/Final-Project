import React, { Component } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css"

class Appointment extends Component {
    state = {
        time: '10:00',
        day: ""
    }

    selectDate = () => {
        return (
          <div>
            <p>Please Select a day:</p>
            <Datetime/>
          </div>
        );
      }
    
    onChange = time => this.setState({time});
    
    // selectTime = () => {
    //     return(
    //         <div>
    //             <p>
    //                 Please pick a time:
    //             </p>
    //             <TimePicker onChange={this.onChange} value={this.state.time} />
    //         </div>
    //     );
    // }

    render() {
        return (
            <div className="text-center mt-5">
                <h1>Appointment</h1>
                <div>
                    <p>
                        Make Appointment
                    </p>
                    <div className="text-left row">
                        <div className="col-6">
                            {this.selectDate()}
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}



export default Appointment;