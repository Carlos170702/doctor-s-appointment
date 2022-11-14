import { useEffect, useState } from "react";

export const useFetch = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    hasError: null,
    message: {
      status: false,
      error: "",
    },
  });

  const getfetch = async (url, options) => {
    setState({
      ...state,
      isLoading: true,
    });

    try {
      const resp = await fetch(url, options);
      const data = await resp.json();

      setState({
        ...state,
        data,
        message: {
          status: true,
          error: data?.Message,
        },
      });

      setTimeout(() => {
        setState({
          ...state,
        });
      }, 2000);

      return data
    } catch (error) {
      setState({
        ...state,
        hasError: error,
      });
    }
  };

  useEffect(() => {
    getfetch();
  }, []);

  return {
    getfetch,
    ...state,
  };
};
