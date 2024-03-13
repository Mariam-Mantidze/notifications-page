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

  return (
    <>
      <Main>
        <HeaderComponent unreadCount={unreadCount} />
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
`;

export default App;
