import { useState } from "react";

export function useInternalApiService(action, method) {
  const [response, setResponse] = useState({
    result: null,
    inProgress: false,
    error: null,
  });

  const fetchRequest = async ({ body = {}, params = [], query = {} } = {}) => {
    setResponse({
      result: null,
      inProgress: true,
      error: null,
    });
console.log("bodysi",body)
    try {
      const url = action;
      if (params) {
        `${url}/${params.join("/")}`;
      }

      const options = {
        method: method.toUpperCase(),
      };
      if (body && (method == "POST" || method == "PUT")) {
        options.body = JSON.stringify(body);
      }

      const res = await fetch(action, options);
      const data = await res.json();

      setResponse({
        result: data,
        inProgress: false,
        error: null,
      });
    } catch (error) {
      setResponse({
        result: null,
        inProgress: false,
        error: error.message,
      });
    }
  };

  return [fetchRequest, response.result, response.inProgress, response.error];
}
