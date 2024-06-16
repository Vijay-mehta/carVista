'use client'
import { useState } from "react";

export function useInternalService(action, method) {
  const [response, setResponse] = useState({
    result: '',
    inProgress: false,
    error: null
  });

  const fetchData = async (body = null) => {
    setResponse({
      result: '',
      inProgress: true,
      error: null
    });

    try {
      const options = {
        method: method.toUpperCase(),
        headers: {
          'Content-Type': 'application/json'
        }
      };

      if (body && (method === 'POST' || method === 'PUT')) {
        options.body = JSON.stringify(body);
      }

      const res = await fetch(action, options);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setResponse({
        result: data,
        inProgress: false,
        error: null
      });
    } catch (error) {
      setResponse({
        result: '',
        inProgress: false,
        error: error.message
      });
    }
  };

  return [response.result, response.inProgress, response.error, fetchData];
}
