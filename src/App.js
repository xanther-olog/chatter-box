/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import {
  FormControl,
  Input,
  InputLabel,
  IconButton,
} from "@material-ui/core";
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { useEffect, useState } from "react";
import "./App.css";
import Message from "./Message";
import db from "./Firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
  const [input, setinput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("test-user");

  useEffect(() => {
    let name = "";
    while (!name) {
      name = prompt("Pls enter your name");
    }
    setUserName(name);
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      username: userName,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setinput("");
  };
  return (
    <div className="App">
      <br />
      <img
        src="https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png"
        alt="Logo"
        height="100"
        width="100"
      />
      <h1>Welcome {userName} </h1>
      <form className="app__form">
        <FormControl className="app__formcontrol">
          <InputLabel> Type a message... </InputLabel>
          <Input
          className="app__input"
            placeholder="Aa"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
        </FormControl>

        <IconButton
        className="app_iconbutton"
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          <SendOutlinedIcon />
        </IconButton>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={userName} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
