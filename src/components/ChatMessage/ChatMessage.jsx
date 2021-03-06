import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";
import { deleteChatMessage, editChatMessage } from "../../api/chatMessages";
import { useState } from "react";

const ChatMessage = ({
  message: { author, content, authorId },
  currentUserId,
  id,
}) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [editedMessage, setEditedMessage] = useState("");

  const handleOpenModal = () => {
    setEditedMessage(content);
    setModalOpen(true);
  };

  const handleUpdateMessage = () => {
    editChatMessage(id, editedMessage);
    setModalOpen(false);
  };

  const handleDeleteMessage = () => {
    deleteChatMessage(id);
  };

  return (
    <Paper elevation={4} className={classes.paper}>
      <Box display="flex">
        <Box display="flex" flexDirection="column">
          <h1 className={classes.authorName}>
            {author}
            <span className={classes.date}>Today at 5:45 AM</span>
          </h1>
          <p className={classes.content}>{content}</p>
        </Box>
        {currentUserId === authorId && (
          <IconButton className={classes.iconButton} onClick={handleOpenModal}>
            <MoreHorizIcon />
          </IconButton>
        )}
      </Box>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className={classes.modal}
      >
        <Paper elevation={4} className={classes.modalPaper}>
          <TextField
            multiline
            rows={10}
            label="Edit message"
            defaultValue={editedMessage}
            onChange={(e) => setEditedMessage(e.target.value)}
          />
          <Box display="flex" className={classes.modalBox}>
            <Button
              color="primary"
              variant="contained"
              className={classes.editButton}
              onClick={handleUpdateMessage}
            >
              SAVE EDIT
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleDeleteMessage}
            >
              DELETE
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Paper>
  );
};

export default ChatMessage;
