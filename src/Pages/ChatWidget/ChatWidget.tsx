import React, { ReactElement } from 'react'
import { Chat } from '../../components/Chat'
import styled from 'styled-components'


type IChatProps = {
className?:string
}

const  ChatWidget = (props: IChatProps): ReactElement => {
    const {className} = props
    return (
      <div className={className}>
        <Chat />
        {/* <div className="bottom-area">
          <ul className="tabset">
            <li>
              <a href="#">Chat</a>
            </li>
            <li>
              <a href="#" className="active">
                FAQ
              </a>
            </li>
            <li>
              <a href="#">Ticket</a>
            </li>
            <li>
              <a href="#">Callbak</a>
            </li>
          </ul>
        </div> */}
      </div>
    );
}

export default styled(ChatWidget)` 
  .bottom-area {
    padding: 10px;
    background: #eee;
  }

  .tabset {
    margin: 0;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    text-align: center;
    border: 1px solid #d7d7d7;
    border-radius: 10px;
    background: #fff;

    li {
      flex: 1;
      border-left: 1px solid #d7d7d7;
      &:first-child {
        border: none;
      }
    }
    
    a {
      display: block;
      color: #3d3d3d;
      padding: 15px;
      text-decoration: none;
      transition: all 0.4s ease;
      &.active,
      &:hover {
        background: #e4e4e4;
      }
    }
  }
`;