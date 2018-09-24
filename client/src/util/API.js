import axios from "axios";
export default {
    // Get the user id
    getUser: function(userName){
        // console.log("I'm in getUser");
        return axios.get("/api/login/"+userName);
    },
    createUser: function(userName, email, password){
        console.log("I'm in createUser"+ userName + "," + email + "," + password);

        return axios.post("api/login", {userName: userName, email: email, password: password});
    }
};