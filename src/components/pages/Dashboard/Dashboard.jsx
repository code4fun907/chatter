import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";
import { addChatMessage } from "../../../api/chatMessages";
import ChatContainer from "../../ChatContainer";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [message, setMessage] = useState();

  const handleSendMessage = () => {
    const newMessage = {
      author: currentUser.displayName,
      authorId: currentUser.uid,
      content: message,
    };

    addChatMessage(newMessage);
  };

  return (
    <div>
      <h1>{currentUser.displayName ? currentUser.displayName : "noname"}</h1>
      <input
        type="text"
        placeholder="New Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>send message</button>

      <ChatContainer />
    </div>
  );
};

export default Dashboard;
