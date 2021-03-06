import { database } from "../firebase";

const REF_NAME = "chatMessages";

export const deleteChatMessage = (messageId) => {
  database.ref(REF_NAME).child(messageId).remove();
};

export const editChatMessage = (messageId, newMessage) => {
  const messageRef = database.ref(REF_NAME).child(messageId);

  messageRef.update({
    content: newMessage,
  });
};

export const addChatMessage = (newMessage) => {
  database.ref(REF_NAME).push(newMessage);
};
