/* eslint-disable no-restricted-globals */
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Message from "./Message";
import db from "./Firebase";
import firebase from "firebase";

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
    db.collection("messages").orderBy("timestamp","desc").onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      username: userName,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    // setMessages([...messages, { username: userName, message: input }]);
    setinput("");
  };
  return (
    <div className="App">
      <h1>Welcome {userName} </h1>
      <form>
        <FormControl>
          <InputLabel> Type a message... </InputLabel>
          <Input
            placeholder="Aa"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
        </FormControl>

        {/* <input value={input} onChange={(e) => setinput(e.target.value)} /> */}
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          {" "}
          Send message{" "}
        </Button>
      </form>

      {messages.map((message) => (
        <Message username={userName} message={message} />
      ))}
    </div>
  );
}

export default App;
