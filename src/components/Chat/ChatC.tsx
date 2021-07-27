import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { Callback } from "../CALLBACK";
import { Ticket } from "../TICKET";
import ChatBox from "./ChatBox";
import { Link } from "react-router-dom";
import { Faq } from "../FAQ/Faq";
import {
  ISCALLBACK_FEATURE,
  ISCHAT_FEATURE,
  ISFAQ_FEATURE,
  ISTICKET_FEATURE,
} from "../../config";
import { CHATOPTIONS } from "../../utils/enums";

type IChatProps = {
  className?: string;
};
// * todo remove process.env variables after api setup for dynamic options
const ChatC = (props: IChatProps): ReactElement => {
  const { className } = props;
  const [tabStates, setTabStates] = useState<string>(CHATOPTIONS.CHAT);
  const [dialogState, setDialogState] = useState<boolean>(false);

  const handleClick = (op: string) => {
    setTabStates(op);
  };
  useEffect(() => {
    if (!ISCHAT_FEATURE) {
      if (ISFAQ_FEATURE) {
        setTabStates(CHATOPTIONS.FAQ);
      } else if (ISTICKET_FEATURE) {
        setTabStates(CHATOPTIONS.TICKET);
      } else if (ISCALLBACK_FEATURE) {
        setTabStates(CHATOPTIONS.CALLBACK);
      }
    }
  }, []);
  const handleCloseSupport = () => {
    setDialogState(!dialogState);
  };

  return (
    <div className={className}>
      {dialogState && (
        <div className="chat-widget">
          <div className="tab-content">
            {CHATOPTIONS.CHAT === tabStates && (
              <ChatBox handleClose={handleCloseSupport} />
            )}

            {CHATOPTIONS.TICKET === tabStates && (
              <Ticket handleClose={handleCloseSupport} />
            )}
            {CHATOPTIONS.CALLBACK === tabStates && (
              <Callback handleClose={handleCloseSupport} />
            )}
            {CHATOPTIONS.FAQ === tabStates && (
              <Faq handleClose={handleCloseSupport} />
            )}
          </div>
          <div className="bottom-area">
            <ul className="tabset">
              {(ISCHAT_FEATURE || process.env.REACT_APP_CHAT) && (
                <li>
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(CHATOPTIONS.CHAT);
                    }}
                    className={CHATOPTIONS.CHAT === tabStates ? "active" : ""}
                  >
                    Chat
                  </Link>
                </li>
              )}
              {(ISFAQ_FEATURE || process.env.REACT_APP_FAQ) && (
                <li>
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(CHATOPTIONS.FAQ);
                    }}
                    className={CHATOPTIONS.FAQ === tabStates ? "active" : ""}
                  >
                    FAQ
                  </Link>
                </li>
              )}
              {(ISTICKET_FEATURE || process.env.REACT_APP_TICKET) && (
                <li>
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(CHATOPTIONS.TICKET);
                    }}
                    className={CHATOPTIONS.TICKET === tabStates ? "active" : ""}
                  >
                    Ticket
                  </Link>
                </li>
              )}
              {(ISCALLBACK_FEATURE || process.env.REACT_APP_CALLBACK) && (
                <li>
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(CHATOPTIONS.CALLBACK);
                    }}
                    className={
                      CHATOPTIONS.CALLBACK === tabStates ? "active" : ""
                    }
                  >
                    Callbak
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
      <button
        className="button button-primary button-question"
        onClick={handleCloseSupport}
      >
        <span className="img">
          <svg
            height="512pt"
            viewBox="0 0 512 512"
            width="512pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m277.332031 384c0 11.78125-9.550781 21.332031-21.332031 21.332031s-21.332031-9.550781-21.332031-21.332031 9.550781-21.332031 21.332031-21.332031 21.332031 9.550781 21.332031 21.332031zm0 0" />
            <path d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0" />
            <path d="m256 314.667969c-8.832031 0-16-7.167969-16-16v-21.546875c0-20.308594 12.886719-38.507813 32.042969-45.269532 25.492187-8.980468 42.625-36.140624 42.625-55.851562 0-32.363281-26.304688-58.667969-58.667969-58.667969s-58.667969 26.304688-58.667969 58.667969c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16c0-49.984375 40.664063-90.667969 90.667969-90.667969s90.667969 40.683594 90.667969 90.667969c0 35.585938-28.097657 73.367188-63.980469 86.039062-6.398438 2.238282-10.6875 8.316407-10.6875 15.101563v21.527344c0 8.832031-7.167969 16-16 16zm0 0" />
          </svg>
        </span>
        Questions?
      </button>
    </div>
  );
};

export default styled(ChatC)`
  .button-question {
    position: fixed;
    right: 0;
    bottom: 0;
    font-size: 30px;
    border-radius: 0 !important;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1;
    font-style: italic;

    .img {
      width: 26px;
      display: inline-block;
      vertical-align: middle;
      margin: 0 10px 0 0;

      svg {
        width: 100%;
        height: auto;
        vertical-align: top;
        fill: currentColor;
      }
    }
  }

  .d-none {
    display: none !important;
  }

  .button {
    display: block;
    margin: 0 0 0 auto;
    background: #6f6f6f;
    color: #fff;
    border: none;
    outline: none;
    min-width: 140px;
    padding: 10px;
    border-radius: 4px;
    transition: all 0.4s ease;
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;

    &:hover {
      background: #000;
    }

    &.button-primary {
      background: #4094cf;

      &:hover {
        background: #347bad;
      }
    }
  }
  .chat-widget {
    position: fixed;
    right: 15px;
    bottom: 54px;
    width: 370px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    z-index: 9999;

    .heading-box {
      display: block;
      background: #6f6f6f;
      color: #fff;
      padding: 15px 40px 15px 15px;
      position: relative;
      font-size: 18px;
      line-height: 22px;

      &.bg-blue {
        background: #4094cf;
      }

      &__user-status {
        padding-left: 70px;
      }

      .img-holder {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translate(0, -50%);
        border-radius: 100%;
        width: 50px;
        height: 50px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .title {
        display: block;
      }

      .status {
        display: block;
        font-weight: 400;
        position: relative;
        padding: 0 0 0 12px;

        &.active {
          &:before {
            background: #8fd82d;
          }
        }

        &:before {
          position: absolute;
          left: 0;
          top: 6px;
          width: 6px;
          height: 6px;
          border-radius: 100%;
          background: #e4e4e4;
          content: "";
        }
      }

      .close {
        position: absolute;
        right: 15px;
        top: 12px;
        width: 20px;
        height: 20px;
        cursor: pointer;

        &:before,
        &:after {
          position: absolute;
          left: 0;
          right: 0;
          top: 10px;
          content: "";
          height: 3px;
          background: #fff;
          transform: rotate(45deg);
        }

        &:after {
          transform: rotate(-45deg);
        }
      }
    }

    .scrolled-area {
      height: 400px;
      overflow: auto;
      max-height: calc(100vh - 250px);
    }

    .content-area {
      padding: 15px;
    }

    .field {
      margin: 0 0 20px;
    }

    .h-100 {
      min-height: 100%;
    }

    label {
      display: inline-block;
      vertical-align: top;
      font-weight: 600;
      color: #000;
      margin: 0 0 5px;
      font-size: 14px;
      line-height: 18px;
      text-transform: uppercase;
    }

    .select-holder {
      input[type="text"] {
        height: 30px;
      }
    }
    .react-datepicker-wrapper,
    .rc-time-picker {
      width: 100%;
    }

    .required {
      color: #f00;
      display: inline-block;
      vertical-align: top;
    }

    .title-text {
      display: block;
      font-size: 14px;
      line-height: 1.5;
      margin: 0 0 15px;
    }

    .message-box {
      border-top: 1px solid #ebebeb;
      padding-left: 40px;
      position: relative;

      input[type="text"] {
        background: #fff;
        width: 100%;
        padding: 15px;
        border: none;
        outline: none;
      }

      .more-options {
        width: 26px;
        height: 26px;
        background: #585858;
        border-radius: 100%;
        position: absolute;
        left: 10px;
        top: 6px;

        &:after,
        &:before {
          position: absolute;
          width: 14px;
          height: 2px;
          background: #fff;
          border-radius: 4px;
          content: "";
          left: 50%;
          top: 50%;
          margin: -1px 0 0 -7px;
        }

        &:after {
          transform: rotate(90deg);
        }
      }
    }

    .d-flex {
      display: flex;
    }

    .align-items-end {
      justify-content: flex-end;
    }

    .flex-direction-column {
      flex-direction: column;
    }

    .chat-text {
      background: #efefef;
      border-radius: 15px 15px 15px 0;
      padding: 10px;
      font-size: 16px;
      line-height: 22px;
      width: calc(100% - 40px);
      margin: 0 0 15px auto;
      color: #777;
      position: relative;

      &:before {
        position: absolute;
        right: 100%;
        bottom: 0;
        border-style: solid;
        border-width: 0 0 16px 16px;
        border-color: transparent transparent #efefef transparent;
        content: "";
      }

      &.sender {
        margin: 0 0 15px;
        background: #4094cf;
        color: #fff;
        border-radius: 15px 15px 0 15px;

        &:before {
          right: auto;
          left: 100%;
          border-style: solid;
          border-width: 15px 0 0 15px;
          border-color: transparent transparent transparent #4094cf;
        }
      }

      p {
        margin: 0;
      }
    }

    .question-box {
      border: 1px solid #e4e4e4;
      border-radius: 8px;

      .question {
        background: #e4e4e4;
        padding: 10px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        display: block;
      }

      .answer-box {
        padding: 10px;
        font-size: 14px;
        line-height: 1.5;
        color: rgb(102, 102, 102);
      }

      p {
        margin: 0 0 10px;
      }
    }

    .viewers-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .list-thumbs {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      line-height: 1;

      li {
        width: 10px;
      }

      svg {
        width: 100%;
        height: auto;
        fill: #999;
      }
    }
  }
`;
