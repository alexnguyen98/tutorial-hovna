import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import Diary from './Diary';

const Home: React.FC = ({ children }) => {
  const jmeno = 'alex';
  const handleClick = () => {};

  return (
    <div className="layout">
      <button onClick={handleClick}>hello there</button>
      {jmeno}
    </div>
  );
};

export default Home;
