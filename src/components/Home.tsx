import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import Diary from './Diary';

const Home: React.FC = ({ children }) => {
  // const [loading, setLoading] = useState<boolean>(false);
  const [form2, setForm2] = useState({ jmeno: 'alex' });

  // useEffect(() => {
  //   setLoading(true);
  //   let timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 200);
  //   return () => clearTimeout(timer);
  // }, []);

  const formData = { jmeno: 'alex' };

  const handleClick = () => {
    // formData.jmeno = 'silva';
    setForm2({ jmeno: 'silva' });
    console.log(formData);
  };

  console.log('rendered');
  console.log(formData);

  return (
    <div className="layout">
      <button onClick={handleClick}>hello there</button>
      {form2.jmeno}
    </div>
  );
};

export default Home;
