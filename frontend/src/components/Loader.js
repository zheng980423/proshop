import React from 'react';
import { Spinner } from 'react-bootstrap';
const Loader = () => {
  return (
    <div>
      <Spinner
        animation="border"
        role="status"
        style={{
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
        }}
      ></Spinner>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
