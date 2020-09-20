import React from "react";
import WithLoader from "./WithLoader";
import DiaryItem from "./DiaryItem";

const diaryData = [
  {
    day: 1,
    text: "Nothing new",
  },
  {
    day: 2,
    text: "Just played learned react",
  },
];

const Diary: React.FC = () => (
  <div>
    <ul>
      {diaryData.map((item) => (
        <DiaryItem key={item.day} day={item.day} text={item.text} />
      ))}
    </ul>
  </div>
);

export default WithLoader(Diary);
