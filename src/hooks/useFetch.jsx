import { useEffect } from "react";

export default function useFetch(setData, setLoading, setError, url) {
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);
}
