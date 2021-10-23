import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import Diary from './Diary';

const Home: React.FC = ({ children }) => {
  const [state, setState] = useState<string>('samuel');

  const handleClick = () => {
    setState('alex');
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="layout">
      <button onClick={handleClick}>hello there</button>
      {state}
      <Hovno hovno={[]} />
    </div>
  );
};

type Props = {
  hovno: any;
};

const Hovno: React.FC<Props> = ({ hovno }) => {
  console.log('k');
  return <div>Hovno</div>;
};

export default Home;
