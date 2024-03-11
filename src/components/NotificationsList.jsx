import styled from "styled-components";
import data from "../data.json";

export default function NotificationsList() {
  return (
    <NotificationContainer>
      {data.notifications.map((message) => {
        return (
          <Notifications key={message.id}>
            <img src={message.profilePic} alt="profile picture of a user" />

            <div className="text-content">
              <h3>{message.senderName}</h3>
              <p className="action">{message.action}</p>
              <span className="post">{message.post}</span>
              <a className="group-name">{message.groupName}</a>
              <p className="text">{message.text}</p>
              {/* <img src={message.userPicture} alt="" /> */}
            </div>
            <span className="time">{message.time}</span>
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
`;

const Notifications = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
  padding: 16px;
  background-color: rgba(247, 250, 253, 1);

  & img {
    width: 39px;
    height: 39px;
  }

  & .text-content {
    display: flex;
    gap: 6px;
  }

  & h3 {
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
`;
