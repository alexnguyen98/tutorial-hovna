import React from "react";

interface Props {
  day: number;
  text: string;
}

const DiaryItem: React.FC<Props> = ({ day, text }) => (
  <li>
    <h3>Day {day}</h3>
    <div className="italic">{text}</div>
  </li>
);

export default DiaryItem;
