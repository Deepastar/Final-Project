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
    getApptPerDay: function(day){
        //Calls the route in routes/api/AppointmentApi.js
        console.log("Reached getApptPerDay:" + day);
        return axios.get("/api/appointment/" + day);
    },

    getAllAppts: function(rawDay){
        console.log("Reached getAllAppts: " + rawDay);
        return axios.get("api/appointment/rawDay/" + rawDay);
    },

    getApptByUser: function(userName){
        console.log("Reached getApptByuser: " + userName);
        return axios.get("api/appointment/userName/" + userName);
    },
    createUser: function(userName, email, password){
        //Calls the route in routes/api/LoginApi.js
       return axios.post("api/login", {userName: userName, email: email, password: password});
    },

    createAppointment: function(userName, id_token, rawDay, day, time, service){
        var bearerToken = "Bearer " + id_token;

        //Calls the route in routes/api/appointment/AppointmentApi.js
       return axios({
           method: "post",
           url: "api/appointment/create",
           data: {
               userName: userName,
               rawDay: rawDay,
               day: day,
               time: time,
               service: service
           },
           headers: {"Authorization": bearerToken}
       });

    },
    createContacts: function(req){
        // return axios.post("api/contacts", {name:req.name, email:req.email, comment:req.comment});
        return axios.post("api/contacts", req);
    }
};