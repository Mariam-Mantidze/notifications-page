// import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import HeaderComponent from "./components/HeaderComponent";
import NotificationsList from "./components/NotificationsList";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Main>
        <HeaderComponent />
        <NotificationsList />
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 24px 16px 29px;
`;

export default App;
