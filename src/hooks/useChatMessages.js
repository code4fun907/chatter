import { database } from "../firebase";
import { useEffect, useState } from "react";

const useChatMessages = () => {
  const [chatMessages, setChatMessages] = useState({});

  useEffect(() => {
    const chatMessagesRef = database.ref("chatMessages");

    chatMessagesRef.on("value", (snapshot) => {
      setChatMessages(snapshot.val());
    });
  }, []);

  return chatMessages;
};

export default useChatMessages;
