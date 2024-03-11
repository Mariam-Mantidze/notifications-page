import styled from "styled-components";
import React from "react";

export default function HeaderComponent() {
  return (
    <Header>
      <NotificationContainer>
        <h3>Notifications</h3>
        <span>3</span>
      </NotificationContainer>
      <p>Mark all as read</p>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: right;
    color: rgba(94, 103, 120, 1);
  }
`;

const NotificationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  & h3 {
    font-size: 20px;
    font-weight: 800;
    line-height: 25px;
  }

  & span {
    background-color: rgba(10, 50, 123, 1);
    padding: 4px 12px;
    border-radius: 5px;

    font-size: 16px;
    font-weight: 800;
    line-height: 20px;
    letter-spacing: 0px;
    color: rgba(255, 255, 255, 1);
  }
`;
