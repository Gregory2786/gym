import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function getFuncion(musculo) {
    const response = await axios.get(`${API_URL}/${musculo}`);

    return response.data;
}