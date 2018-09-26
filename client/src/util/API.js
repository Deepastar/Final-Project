import axios from "axios";
export default {
    // Get the user id
    getUser: function(userName, password){
        // console.log("I'm in getUser");
        return axios.get("/api/login/"+userName+"/"+password);
    },

    createUser: function(userName, email, password){
       return axios.post("api/login", {userName: userName, email: email, password: password});
    },

    createAppointment: function(userName, id_token, day, time){
        var bearerToken = "Bearer " + id_token;

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