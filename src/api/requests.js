import axios from "axios";
import { BASE_URL } from "../config/config.js";

// get:
const getShoes = async () => {
    try {
        const response = await axios(BASE_URL + "/shoes");
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

// post:
const postShoes = async (newShoes) => {
    try {
        const response = await axios.post(BASE_URL + "/shoes", newShoes);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

// put:
const putShoes = async (updateShoes, id) => {
    try {
        const response = await axios.put(BASE_URL + "/shoes/" + id, updateShoes);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

// delete:
const deleteShoes = async (id) => {
    try {
        const response = await axios(BASE_URL + "/shoes/" + id);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}


export { getShoes, postShoes, putShoes, deleteShoes };