import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";
import { useState } from "react";

const ChatMessage = ({
  message: { author, content, authorId },
  currentUserId,
}) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Paper elevation={4} className={classes.paper}>
      <Box display="flex" className={classes.container}>
        <Box display="flex" flexDirection="column" className={classes.inner}>
          <h1 className={classes.authorName}>
            {author}
            <span className={classes.date}>Today at 5:45 AM</span>
          </h1>
          <p className={classes.content}>{content}</p>
        </Box>
        {currentUserId === authorId && (
          <IconButton className={classes.iconButton}>
            <MoreHorizIcon />
          </IconButton>
        )}
      </Box>
    </Paper>
  );
};

export default ChatMessage;
