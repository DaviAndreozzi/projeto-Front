import axios from "axios";
import { useState } from "react";
import {Base_URL_POST } from "../constants/BASE_URL";

export const useGetPosts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMensage] = useState("");

  const loadingData = async (id, authorization) => {
    setLoading(true);

    try {
      let response;

      if (!id) {
        response = await axios.get(`${Base_URL_POST
        }`, authorization);
      } 

      setLoading(false);

      return [response.data, loading];
    } catch (erro) {
      console.log(erro.message);

      setLoading(false);
      setError(true);
      setErrorMensage(erro);

      return erro;
    }
  };

  return [loadingData, error, errorMessage];
};
