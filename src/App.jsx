import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import HeaderComponent from "./components/HeaderComponent";
import NotificationsList from "./components/NotificationsList";
import data from "./data.json";

function App() {
  const [notifications, setNotifications] = useState(data.notifications);

  const unreadCount = notifications.filter(
    (notification) => notification.isUnread
  ).length;

  const markAllasRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      isUnread: false,
    }));
    setNotifications(updatedNotifications);
  };

  return (
    <>
      <Main>
        <HeaderComponent
          markAllasRead={markAllasRead}
          unreadCount={unreadCount}
        />
        <NotificationsList
          notifications={notifications}
          setNotifications={setNotifications}
        />
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 24px 16px 29px;
  background: rgba(255, 255, 255, 1);

  @media (min-width: 1000px) {
    width: 730px;
  }
`;

export default App;
