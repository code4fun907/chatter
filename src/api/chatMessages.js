import { database } from "../firebase";

const REF_NAME = "chatMessages";

export const deleteChatMessage = (messageId) => {
  database.ref(REF_NAME).child(messageId).remove();
};

export const addChatMessage = (newMessage) => {
  database.ref(REF_NAME).push(newMessage);
};
