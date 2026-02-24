import "./chat.css";
import { useState } from "react";
import { generateDummyMessage } from "./mock/messageEmitter";
import MessageList from "./components/MessageList";
import { useRef } from "react";
import { useEffect } from "react";

const ChatContainer = () => {
  //   const messageData = [
  //     generateDummyMessage(),
  //     generateDummyMessage(),
  //     generateDummyMessage(),
  //     generateDummyMessage(),
  //     generateDummyMessage(),
  //   ];
  const messageRef = useRef([]);

  useEffect(() => {
    let timer = "";
    timer = setInterval(() => {
      messageRef.current.push(generateDummyMessage());
      console.log("message ref", messageRef.current);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    let timer = "";
    timer = setInterval(() => {
      if (messageRef.current.length > 0) {
        // STEP 1 → create a copy of buffer
        const bufferedMessages = [...messageRef.current];
        setMessageList((messageList) => [...messageList, ...bufferedMessages]);

        messageRef.current = [];
      }
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="chat-window">
        <MessageList messageList={messageList} />
      </div>
    </>
  );
};

export default ChatContainer;
