import styled from "styled-components";
import data from "../data.json";

export default function NotificationsList() {
  return (
    <NotificationContainer>
      {data.notifications.map((message) => {
        return (
          <Notifications key={message.id}>
            <img src={message.profilePic} alt="profile picture of a user" />
            <div className="flex-container">
              <div className="text-content">
                <a className="sender-name" href="#">
                  {message.senderName}
                </a>
                <p className="action">{message.action}</p>
                <span className="post">{message.post}</span>
                <a className="group-name" href="#">
                  {message.groupName}
                </a>

                <p className="message-text">{message.text}</p>
                <img
                  className="user-picture"
                  src={message.userPicture}
                  alt=""
                />
              </div>
              <span className="time">{message.time}</span>
            </div>
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
  display: flex;
  gap: 13px;
  align-items: flex-start;
  padding: 16px;
  background-color: rgba(247, 250, 253, 1);

  & a {
    text-decoration: none;
  }

  & img {
    width: 39px;
    height: 39px;
  }

  & .text-content {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  & .sender-name {
    font-size: 14px;
    font-weight: 800;
    line-height: 18px;
    color: rgba(28, 32, 43, 1);
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
  }

  & .group-name {
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    color: rgba(10, 50, 123, 1);
  }

  & .time {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: rgba(147, 156, 173, 1);
  }

  & .flex-container {
    display: flex;
    flex-direction: column;
    gap: 3px;
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
  }
`;
