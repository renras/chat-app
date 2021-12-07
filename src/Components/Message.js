const Message = ({ avatar, message }) => {
  <div>
    <img src={avatar} alt="avatar" />
    <p>{message}</p>
  </div>;
};

export default Message;
