import axios from "axios";

export const fetchQuote = async () => {
  const { data } = await axios.get("https://api.kanye.rest");
  return data.quote;
};
