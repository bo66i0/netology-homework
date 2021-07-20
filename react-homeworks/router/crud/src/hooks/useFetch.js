import {useEffect, useState} from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if(!response.ok) {
          console.log(response.status);
        }
        return response.json()
      })
      .then(data => setData(data))
      .catch(error => setData(null));
  }, [url]);

  return [data, setData];
}