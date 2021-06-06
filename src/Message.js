import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message(props) {
  const isItMyMessage = props.message.username === props.username;
  return (
    <div class={`message ${isItMyMessage && "message__user"}`}>
      <Card class={isItMyMessage ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {props.message.username} : {props.message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
