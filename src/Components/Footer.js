import { useState } from "react";
import avatar from "../images/avatar.jpg";

const Footer = ({ addToMessages }) => {
  const [text, setText] = useState("");

  const handleButtonClick = () => {
    addToMessages({ avatar: avatar, message: text });
    setText("");
  };

  return (
    <footer className="h-16 flex bg-bg-bar drop-shadow-xl">
      <input
        className="w-3/4 outline-none p-4 bg-text"
        type="text"
        placeholder="say something nice"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleButtonClick} className="w-1/4">
        Enter
      </button>
    </footer>
  );
};

export default Footer;
