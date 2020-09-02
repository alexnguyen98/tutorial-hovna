import React, { useState, useEffect } from "react";
import Diary from "./Diary";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="layout">
      <nav>Logo</nav>
      <main>
        <h1>Home</h1>
        <Diary loading={loading} />
      </main>
      <footer>Footer @applifting2020</footer>
    </div>
  );
};

export default Home;
