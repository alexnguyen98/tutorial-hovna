import React from "react";

interface Props {
  loading?: boolean;
}

const WithLoader = (Component: React.ComponentType<Props>) => ({
  loading,
  ...props
}) => (loading ? <p>Loading...</p> : <Component {...props} />);

export default WithLoader;
