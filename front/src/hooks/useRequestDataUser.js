import axios from "axios";
import {Base_URL_USERS } from "../constants/BASE_URL";
import { useState } from "react";

export function useRequestDataUser(url, initialState) {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMensage] = useState("");
  const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const token = localStorage.getItem('token')
  
  const getAllPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(Base_URL_USERS, headers);


      setData(response.data)  
      
      
      // redirecionar para pagina de publicações!
      setLoading(false);
      // redirecionara para pagina de publicaçoes
    } catch (error) {
      setError(true);
      setError(false);
      // Enviar mensagem com qual tido erro
      setErrorMensage(error.response.data);
    }
  };
 
  return [getAllPosts, data, errorMessage, error, loading,token];
}
// mexi aqui