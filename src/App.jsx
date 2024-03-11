import { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Main>
        <Header>
          <NotificationContainer>
            <h3>Notifications</h3>
            <span>3</span>
          </NotificationContainer>
          <p>Mark all as read</p>
        </Header>
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 24px 16px 29px;
`;

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

export default App;
