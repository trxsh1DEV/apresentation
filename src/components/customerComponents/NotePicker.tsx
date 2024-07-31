import { useState } from "react";
import TipTap from "./TipTap";

export const NotePicker = () => {
  const [content, setContent] = useState<string>("");
  const handleContentChange = (reason: any) => {
    setContent(reason);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      id: Math.floor(Math.random() * 1000),
      content: content,
    };
    console.log(data);
    const existingDataString = localStorage.getItem("myData");
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : [];
    const updatedData = [...existingData, data];
    localStorage.setItem("myData", JSON.stringify(updatedData));
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10"
    >
      <div className="text-3xl text-center mb-10">Adicione uma nota</div>
      <TipTap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />
    </form>
  );
};

export default NotePicker;
