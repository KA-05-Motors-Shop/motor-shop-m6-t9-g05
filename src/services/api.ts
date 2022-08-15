import axios from "axios";

export const api = axios.create({
    baseURL: "https://motorsshop-api.herokuapp.com"
})