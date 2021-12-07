import { IoMdNotificationsOutline } from "react-icons/io";
const Notification = ({ messages }) => {
  console.log(messages);
  return (
    <div className="relative inline-block">
      <IoMdNotificationsOutline fontSize="30px" color="#BABABA" />
      <p className="absolute top-0 right-0 bg-notification text-white text-xs rounded-full px-1">
        {messages.length > 0 ? messages.length : ""}
      </p>
    </div>
  );
};

export default Notification;
