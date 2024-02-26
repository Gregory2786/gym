// Importa a biblioteca axios para fazer solicitações HTTP
import axios from "axios";

// Define a constante API_URL que armazena a URL base da API a ser consumida, 
// usando uma variável de ambiente fornecida pelo ambiente React
const API_URL = process.env.REACT_APP_API_URL;

// Define uma função assíncrona chamada getFuncion que recebe um parâmetro 'musculo'
export async function getFuncion(musculo) {
    
    // Faz uma solicitação GET para a API concatenando a URL base da API com o parâmetro 'musculo'
    const response = await axios.get(`${API_URL}/${musculo}`);
    
    // Retorna os dados da resposta da solicitação
    return response.data;
}