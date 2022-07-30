import { useState } from "react";

const useGet = ({ url }: { url: string }) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const getData = async () => {
    setLoading(true);
    if (error) setError(false);
    try {
      const response = await fetch(url);
      const resolvedResponse = await response.json();
      setResponse(resolvedResponse);
    } catch (e) {
      setError(true);
      if (typeof e === "string") setErrorMessage(e);
    }
    setLoading(false);
  };

  return { response, loading, error, errorMessage, getData };
};

export default useGet;
