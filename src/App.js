import { useState } from "react";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  const [messages, setMessages] = useState([]);

  const addToMessages = (data) => {
    setMessages([...messages, data]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  console.log(messages.length);
  return (
    <div className="App w-96 bg-bg-secondary drop-shadow-2xl">
      <Header messages={messages} clearMessages={clearMessages} />
      <Main messages={messages} />
      <Footer addToMessages={addToMessages} />
    </div>
  );
}

export default App;
