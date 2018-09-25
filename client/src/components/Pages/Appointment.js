import React, { Component } from "react";
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';



class Appointment extends Component {
    selectDate = () => {
        return (
          <div>
            <p>Please type a day:</p>
            <DayPickerInput onDayChange={day => console.log(day)} />
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
                    {this.selectDate()}
                </div>
            </div>
        );
    }
}



export default Appointment;