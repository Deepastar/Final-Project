import axios from "axios";
export default {
    getUserForSignUp: function(userName){
        //Calls the route in routes/api/LoginApi.js
        return axios.get("/api/login/"+userName);
    },
    // Get the user id
    getUser: function(userName, password){
        // console.log("I'm in getUser");
        //Calls the route in routes/api/LoginApi.js
        return axios.get("/api/login/"+userName+"/"+password);
    },

    createUser: function(userName, email, password){
        //Calls the route in routes/api/LoginApi.js
       return axios.post("api/login", {userName: userName, email: email, password: password});
    },

    createAppointment: function(userName, id_token, day, time){
        var bearerToken = "Bearer " + id_token;

        //Calls the route in routes/api/appointment/AppointmentApi.js
       return axios({
           method: "post",
           url: "api/appointment/create",
           data: {
               userName: userName,
               day: day,
               time: time
           },
           headers: {"Authorization": bearerToken}
       });

    }
};