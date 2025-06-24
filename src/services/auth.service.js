import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const auth = "/auth"
let cachedToken = null;

export const login = (email, password) => {
    console.log("Sending api", apiUrl + auth + "/login");
    return axios.post(apiUrl + auth + "/login", {
        email:    email,
        password: password
    });
}

export const register = (userName, email, password) => {
    console.log("Sending api", apiUrl + auth + "/register");
    return axios.post(apiUrl + auth + "/register", {
        username: userName,
        email:    email,
        password: password
    });
}

export const setToken = (token) => {
    cachedToken = token;
}

export const getToken = () => cachedToken;


const authService = { login, register, setToken, getToken }

export default authService