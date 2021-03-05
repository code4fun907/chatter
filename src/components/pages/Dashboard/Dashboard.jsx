import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";
import { deleteChatMessage, addChatMessage } from "../../../api/chatMessages";
import useChatMessages from "../../../hooks/useChatMessages";

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
          <div key={key}>
            <p>{value.author}</p>
            <p>{value.content}</p>
            {value.authorId === currentUser.uid && (
              <button onClick={() => deleteChatMessage(key)}>Delete</button>
            )}
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
