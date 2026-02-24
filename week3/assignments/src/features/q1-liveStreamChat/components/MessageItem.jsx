import React from "react";
import { formatTime } from "../mock/messageEmitter";

const MessageItem = ({ message }) => {
  return (
    <>
      <div className="message-item">
        <span>{formatTime(message?.timeStamp)}</span>
        <h4>{message?.message}</h4>
      </div>
    </>
  );
};

export default React.memo(MessageItem);
