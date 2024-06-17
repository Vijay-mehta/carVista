import { useState } from "react";

export function useInternalService(action, method) {
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

    try {
      const options = {
        method: method.toUpperCase(),
      };

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
