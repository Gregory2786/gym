import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function getFuncion(musculo){
    const response = await axios.get('http://localhost:4000/exercises/musculo',{musculo});
    return response.data;
}