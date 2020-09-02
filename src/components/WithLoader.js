import React from "react";

const WithLoader = (Component) => ({ loading, ...props }) =>
  loading ? <p>Loading...</p> : <Component {...props} />;

export default WithLoader;
