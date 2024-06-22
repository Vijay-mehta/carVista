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

    try {
      let url = action;
      if (params && params.length > 0) {
        url = `${url}/${params.join("/")}`;
      }

      const options = {
        method: method.toUpperCase(),
        headers: {},
      };

      // Handle query parameters
      if (query && Object.keys(query).length > 0) {
        const queryString = new URLSearchParams(query).toString();
        url += `?${queryString}`;
      }

      // Handle body
      if (body && (method === "POST" || method === "PUT")) {
        if (body instanceof FormData) {
          options.body = body;
        } else {
          options.body = JSON.stringify(body);
          options.headers['Content-Type'] = 'application/json';
        }
      }

      const res = await fetch(url, options);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'An unknown error occurred');
      }

      const data = await res.json();

      setResponse({
        result: data,
        inProgress: false,
        error: null,
      });
    } catch (error) {
      console.error("Fetch request failed:", error.message);
      setResponse({
        result: null,
        inProgress: false,
        error: error.message,
      });
    }
  };

  return [fetchRequest, response.result, response.inProgress, response.error];
}
