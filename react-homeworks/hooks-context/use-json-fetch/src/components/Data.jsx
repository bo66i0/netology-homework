import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

function Data(props) {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data');

  return (
    <div>
      {loading && <p>Loading...</p>}
      <div>{error && error.message}</div>
      <div>{data && data.status}</div>
    </div>
  );
}

export default Data;