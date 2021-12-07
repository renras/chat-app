import Notification from "./Notification";

const Header = ({ messages, clearMessages }) => {
  return (
    <header className="p-4 h-16 flex justify-between bg-bg-bar drop-shadow-xl">
      <Notification messages={messages} />
      <button onClick={clearMessages}>Clear</button>
    </header>
  );
};

export default Header;
