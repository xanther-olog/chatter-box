/* eslint-disable no-unused-vars */
import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";

const Message = forwardRef((props, ref) => {
  const isItMyMessage = props.message.username === props.username;
  return (
    <div ref={ref} class={`message ${isItMyMessage && "message__user"}`}>
      <Card class={isItMyMessage ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            <b>{!isItMyMessage && `${props.message.username}: `}</b>
            {props.message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
