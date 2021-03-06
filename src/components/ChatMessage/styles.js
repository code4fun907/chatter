import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    background: "#0F194D",
    color: "white",
    margin: ".8em",
    padding: ".8em",
    position: "relative",
    wordBreak: "break-all",
  },
  authorName: {
    fontSize: "large",
  },
  date: {
    fontSize: "small",
    marginLeft: ".5em",
    color: "rgba(255, 255, 255, 0.42)",
  },
  content: {
    marginTop: ".8em",
  },
  iconButton: {
    marginLeft: "auto",
    color: "white",
    position: "absolute",
    right: 0,
    top: 0,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalPaper: {
    background: "white",
    padding: ".8em",
  },
  modalBox: {
    marginTop: ".8em",
  },
  editButton: {
    marginRight: ".8em",
  },
}));
