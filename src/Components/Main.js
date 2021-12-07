const Main = ({ messages }) => {
  return (
    <main className="p-4 h-96 flex flex-col gap-4 overflow-y-auto">
      {messages.map((message, index) => {
        return (
          <div key={index} className="flex gap-2 items-start">
            <img
              src={message.avatar}
              alt="avatar"
              className="w-10 rounded-full"
            />
            <p className="whitespace-pre-line break-all text-text mt-2">
              {message.message}
            </p>
          </div>
        );
      })}
    </main>
  );
};

export default Main;
