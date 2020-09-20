import React, { useState, useEffect } from "react";
import { fetchQuote } from "../util/api";

const Quote: React.FC = () => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const quote = await fetchQuote();
      setData(quote);
    })();
  }, []);

  return (
    <div>
      <h2>Quote of the day</h2>
      <br />
      <div>{data}</div>
      <br />
    </div>
  );
};

export default Quote;
