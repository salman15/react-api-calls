import { useState } from "react";

const usePut = ({ url, data }: { url: string; data: unknown }) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const getData = async () => {
    setLoading(true);
    if (error) setError(false);
    try {
      const response = await fetch(url, {
        method: "put",
        body: JSON.stringify(data),
      });

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

export default usePut;
