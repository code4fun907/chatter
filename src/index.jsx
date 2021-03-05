import { AuthContextProvider } from "./contexts/AuthContext";
import App from "./App";
import ReactDOM from "react-dom";
import "./globals.css";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
