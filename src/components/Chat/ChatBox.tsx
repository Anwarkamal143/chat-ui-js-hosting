import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import StartChat from "./StartChat";
import ScrollToBottom from "react-scroll-to-bottom";
import { SupportIcon } from "../../assets";
import ReactEmoji from "react-emoji";
import loremGenerator  from "dummy-text-generator";

type IChatProps = {
  className?: string;
  classes?:string
  handleClose?:() => void
};
enum options {
  startchat = "startchat",
  chatbox = "chatbox",

}
enum MESSANGERS  {
  ME='me',
  THEM='them'
}
const ChatBox = (props: IChatProps): ReactElement => {
  const { className, classes, handleClose } = props;
    const [tabStates, setTabStates] = useState<string>("startchat");
    const [messages, setMessages] = useState<
      { message: string; sender: string }[]
    >([]);
    const [message, setMessage] = useState('')
    const [person, setPerson] = useState("Noah");
    const [firstMessage, setFirstMessage] = useState<string>();

  const handleChangeMessage =(e:any) => {
setMessage(e.target.value)
  }
  const handeKeypress = (e:any) => {
      if (e.key === "Enter") {
        const msg = { sender: MESSANGERS.ME, message };
        setMessages((mgs) => [...mgs, msg]);
        setMessage("");
        setTimeout(() => {
          const sender = {
            sender: MESSANGERS.THEM,
            message: loremGenerator.generateSentence(10),
          };
          setMessages((msgs) => [...msgs, sender]);
        }, 1000);
      }
  }
  return (
    <>
      {options.chatbox === tabStates ? (
        <div className={`${className} ${classes}`}>
          <div className="content-box">
            <strong className="heading-box heading-box__user-status">
              <span className="img-holder">
                {/* eslint-disable */}
                <SupportIcon />
                {/* <img
                  src="https://via.placeholder.com/350x150"
                  alt="profile image"
                /> */}
              </span>
              <span className="title">Conversation</span>
              <span className="status active">{person}</span>
              <span className="close" onClick={handleClose}></span>
            </strong>
            {/* <div className="scrolled-area"> */}
            <ScrollToBottom className="messages">
              <div className="d-flex align-items-end flex-direction-column h-100">
                <div className="content-area">
                 {firstMessage && <div className="chat-text">
                    <p>{firstMessage}</p>
                  </div>}
                  <div className="chat-text sender">
                    <p>Hello, {person}</p>
                  </div>
                  <div className="chat-text sender">
                    <p>
                      Please be patient while you are being conneted with an
                      operator ...
                    </p>
                  </div>
                  {messages.map((message, i) => {
                    return (
                      <div
                        key={message.message + i}
                        className={`chat-text ${
                          message.sender !== MESSANGERS.ME ? "sender" : ""
                        }`}
                      >
                        <p>{ReactEmoji.emojify(message.message)}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollToBottom>
          </div>
          <div className="message-box">
            <span className="more-options"></span>
            <input
              type="text"
              value={message}
              placeholder="Your message"
              onChange={handleChangeMessage}
              onKeyPress={handeKeypress}
            />
          </div>
        </div>
      ) : (
        // </div>
        <StartChat
          onSubmit={(person: string, message: string) => {
            setPerson(person);
            message && setFirstMessage(message);
            setTabStates("chatbox");
          }}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default styled(ChatBox)`
svg{
  fill: white;
}
  .messages {
    padding: 5% 0;
    overflow: auto;
    flex: auto;
    /* height: 500px; */
    height: 400px;
    max-height: calc(100vh - 250px);
  }
`;
