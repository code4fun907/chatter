import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";
import { deleteChatMessage, addChatMessage } from "../../../api/chatMessages";
import useChatMessages from "../../../hooks/useChatMessages";
import ChatMessage from "../../ChatMessage";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const chatMessages = useChatMessages();
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
      <h1>{currentUser.displayName ? currentUser.displayName : "nonam"}</h1>
      <input
        type="text"
        placeholder="New Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>send message</button>

      {chatMessages &&
        Object.entries(chatMessages).map(([key, value]) => (
          <ChatMessage
            key={key}
            message={value}
            currentUserId={currentUser.uid}
          />
        ))}
    </div>
  );
};

export default Dashboard;
