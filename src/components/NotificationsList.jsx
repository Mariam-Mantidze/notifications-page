import styled from "styled-components";
import data from "../data.json";
import { useState } from "react";

export default function NotificationsList({ notifications, setNotifications }) {
  return (
    <NotificationContainer>
      {notifications.map((message) => {
        return (
          <Notifications
            onClick={() => {
              const newNotifications = notifications.map(
                (
                  notification // creating new array so that state is immutable
                ) =>
                  message.id === notification.id
                    ? { ...notification, isUnread: false } // here we are changing/updating and hence creating new object. not a new array.
                    : notification // and if it was not clicked, it remaines untouched.
              );
              setNotifications(newNotifications); // updating the state with new array that has changed object
            }}
            key={message.id}
            isunread={message.isUnread}>
            <div className="notifications-box">
              <img src={message.profilePic} alt="profile picture of a user" />
              <div className="notification-content">
                <p className="notification-text">
                  <a className="sender-name" href="#">
                    {message.senderName}
                  </a>
                  <span className="action">{message.action}</span>
                  {message.post ? (
                    <span className="post">{message.post}</span>
                  ) : null}
                  {message.groupName ? (
                    <a className="group-name" href="#">
                      {message.groupName}
                    </a>
                  ) : null}
                </p>
                <span className="time">{message.time}</span>
              </div>
            </div>
            {message.text ? (
              <p className="message-text"> {message.text} </p>
            ) : null}
            {message.userPicture ? (
              <img className="user-picture" src={message.userPicture} alt="" />
            ) : null}
          </Notifications>
        );
      })}
    </NotificationContainer>
  );
}

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;
`;

const Notifications = styled.div`
  padding: 16px;
  background-color: ${(props) =>
    props.isunread ? "rgba(247, 250, 253, 1)" : ""};

  & .notifications-box {
    display: flex;
    gap: 13px;
  }

  & a {
    text-decoration: none;
  }

  & img {
    width: 39px;
    height: 39px;
  }

  & .sender-name {
    font-size: 14px;
    font-weight: 800;
    line-height: 18px;
    color: rgba(28, 32, 43, 1);
    margin-right: 6px;
  }

  & .action {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: rgba(94, 103, 120, 1);
  }

  & .post {
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    color: rgba(94, 103, 120, 1);
    margin-left: 6px;
  }

  & .group-name {
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    color: rgba(10, 50, 123, 1);
    margin-left: 6px;
  }

  & .time {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: rgba(147, 156, 173, 1);
    margin-top: 3px;
  }

  & .message-text {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: rgba(94, 103, 120, 1);
    background-color: rgba(255, 255, 255, 1);
    padding: 16px;
    border: 1px solid rgba(221, 231, 238, 1);
    border-radius: 5px;
    margin-top: 12px;
    margin-left: 50px;
  }
  & .user-picture {
  }
`;
