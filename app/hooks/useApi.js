import React, { useState } from "react";


const useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const request = async (...args) => {
      setLoading(true);
      const response = await apiFunc(...args);
      setLoading(false);
      if (!response.ok) {
        setError(true);
        // response.problem
        return;
      }
      setError(false);
      setData(response.data);
    };
  
    return {
      request,
      data,
      error,
      loading,
    };
  };
export default useApi;

