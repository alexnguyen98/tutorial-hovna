import React, { useState, useEffect } from "react";
import Quote from "./Quote";
import Diary from "./Diary";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

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
        <Quote />
        <Diary loading={loading} />
      </main>
      <footer>Footer @applifting2020</footer>
    </div>
  );
};

export default Home;
