import Box from "@material-ui/core/Box";
import ScrollToBottom from "../common/ScrollToBottom";
import useChatMessages from "../../hooks/useChatMessages";
import ChatMessage from "../ChatMessage";
import { useAuth } from "../../contexts/AuthContext";

const ChatContainer = ({ className }) => {
  const { currentUser } = useAuth();
  const chatMessages = useChatMessages();

  return (
    <Box overflow="scroll" className={className}>
      {chatMessages &&
        Object.entries(chatMessages).map(([key, value]) => (
          <ChatMessage
            key={key}
            message={value}
            currentUserId={currentUser.uid}
            id={key}
          />
        ))}
      <ScrollToBottom />
    </Box>
  );
};

export default ChatContainer;
