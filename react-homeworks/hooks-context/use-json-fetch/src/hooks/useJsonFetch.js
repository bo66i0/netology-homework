import {useState, useEffect} from 'react';

export default function useJsonFetch(url, opts) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error(response.statusText);
        }

        const responseJson = await response.json();
        setData(responseJson);
        setHasError(null);
      } catch(e) {
        setHasError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, isLoading, hasError];
}