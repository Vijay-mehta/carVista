import { useState } from "react";

export function useInternalApiService(url, method , initialValues = null) {
  console.log("methos",method)
  const [response, setResponse] = useState({
    result: initialValues,
    inProgress: false,
    error: null
  });

  const fetchRequest = async ({ body = {}, params = [], query = {} } = {}) => {
    setResponse({
      result: null,
      inProgress: true,
      error: null
    });

    try {
      let location = url;
      if (params && params.length > 0) {
        location = `${url}/${params.join("/")}`;
        
      }

      console.log("location",location)


  
      const options = {
        method: method.toUpperCase(),
        headers: {}
      };

      if (body && (method === "POST" || method === "PUT")) {
        if (body instanceof FormData) {
          console.log("FormData",body)
          options.body = body;
        } else {
          options.body = JSON.stringify(body);
          options.headers['Content-Type'] = 'application/json';
        }
      }

      const response = await fetch(location, options);

      console.log("first response",response)
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "unknown error");
      }

      const res = await response.json();
      console.log("second res",res)

      setResponse({
        result: res,
        inProgress: false,
        error: null
      });

      

    } catch (error) {
      setResponse({
        result: null,
        inProgress: false,
        error: error.message
      });
    }
  };

  return [fetchRequest, response.result, response.inProgress, response.error];
}
