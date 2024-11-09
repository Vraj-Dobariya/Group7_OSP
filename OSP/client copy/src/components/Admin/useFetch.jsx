import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [ispending, setPending] = useState(true);
  const [error, setError] = useState(null);

  console.log('in fetch');
  console.log(url);


  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error('could not fetch the data');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setPending(false);
        setError(null);
      })
      .catch((err) => {
        setPending(false);
        setError(err.message);
      });
  }, [url]);

  console.log(data);

  return { data, ispending, error };
};

export default useFetch;
