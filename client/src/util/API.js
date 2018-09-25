import axios from "axios";
export default {
    // Get the user id
    getUser: function(userName, password){
        // console.log("I'm in getUser");
        return axios.get("/api/login/"+userName+"/"+password);
    },
    createUser: function(userName, email, password){
       return axios.post("api/login", {userName: userName, email: email, password: password});
    }
};