import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch";

function Error(props) {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error');

  return (
    <div>
      {loading && <p>Loading...</p>}
      <div>{error && error.message}</div>
      <div>{data && data.status}</div>
    </div>
  );
}

export default Error;