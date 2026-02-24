import React from "react";
import MessageItem from "./MessageItem";

const MessageList = ({ messageList }) => {
  return (
    <div className="message-list">
      {messageList?.map((message, index) => (
        <MessageItem message={message} key={message?.id} />
      ))}
    </div>
  );
};

export default React.memo(MessageList);
