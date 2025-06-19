import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const auth = "/auth"

export const login = (email, password) => {
    console.log("Sending api", apiUrl + auth + "/login");
    axios.post(apiUrl + auth + "/login", {
        email:    email,
        password: password
    });
}

export const register = (userName, email, password) => {
    console.log("Sending api", apiUrl + auth + "/register");
    axios.post(apiUrl + auth + "/register", {
        username: userName,
        email:    email,
        password: password
    });
}

const authService = { login, register }

export default authService