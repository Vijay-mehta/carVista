import { useState } from "react";

export function useInternalApiService(url, method, initialValues = null) {
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

      const options = {
        method: method.toUpperCase(),
        headers: {}
      };

      if (body && (method === "POST" || method === "PUT")) {
        if (body instanceof FormData) {
          options.body = body;
        } else {
          options.body = JSON.stringify(body);
          options.headers['Content-Type'] = 'application/json';
        }
      }

      const response = await fetch(location, options);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Fetch error:", errorData);
        throw new Error(errorData.error || "Unknown error");
      }

      const res = await response.json();

      setResponse({
        result: res,
        inProgress: false,
        error: null
      });

    } catch (error) {
      console.error("Request failed:", error);
      setResponse({
        result: null,
        inProgress: false,
        error: error.message
      });
    }
  };

  return [fetchRequest, response.result, response.inProgress, response.error];
}
