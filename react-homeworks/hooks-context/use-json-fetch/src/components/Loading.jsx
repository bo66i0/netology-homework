import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch";

function Loading(props) {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading');

  return (
    <div>
      {loading && <p>Loading...</p>}
      <div>{error && error.message}</div>
      <div>{data && data.status}</div>
    </div>
  );
}

export default Loading;