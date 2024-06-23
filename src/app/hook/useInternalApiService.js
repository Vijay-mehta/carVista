import { useState } from "react";

export function useInternalApiService(url, method) {
  const [response, setResponse] = useState({
    result: null,
    inProgress: false,
    error: null,
  });

  const fetchRequest = async ({ body = {} } = {}) => {
    setResponse({
      result: null,
      inProgress: true,
      error: null,
    });

    try {
      const options = {
        method: method.toUpperCase(),
        headers: {},
        body: body,
      };

      // Handle different content types
      if (body instanceof FormData) {
        delete options.headers["Content-Type"]; // Let browser handle it
      } else {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unknown error");
      }

      const res = await response.json();

      setResponse({
        result: res,
        inProgress: false,
        error: null,
      });

      return res;
    } catch (error) {
      setResponse({
        result: null,
        inProgress: false,
        error: error.message,
      });

      throw error;
    }
  };

  return [fetchRequest, response.result, response.inProgress, response.error];
}
