import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Study from "./chapter3/Study";
import Parent from "./20230515/Parent";
import Babo from "./20230515/Babo";
import Clock from "./20230515/Clock";
import CommentList from "./20230515/CommentList";
import RpsGame from "./20230515/rps";
import NotificationList from "./20230516/NotificationList";
import {Routes, Route, Link} from "react-router-dom";
import Hooks1 from "./20230516/Hooks1";
import Hooks2 from "./20230516/Hooks2";
import Hooks3 from "./20230516/Hooks3";
import UseEffect from "./20230522/UseEffect";
import UseRef from "./20230522/UseRef";
import UseMemoChild from "./20230522/UseMemoChild";
import UseMemo from "./20230522/UseMemo";
import UseCallback from "./20230522/UseCallback";
import UseContext from "./20230522/UseContext";
import Networking from "./20230522/Networking";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/animalfriends">example</Nav.Link>
            <Nav.Link href="/babo">babo</Nav.Link>
            <Nav.Link href="/Clock">Clock</Nav.Link>
            <Nav.Link href="/Comment">CommentList</Nav.Link>
            <Nav.Link href="/rps">가위바위보</Nav.Link>
            <Nav.Link href="/notify">Notification</Nav.Link>
            <Nav.Link href="/Hooks1">Hooks1</Nav.Link>
            <Nav.Link href="/Hooks2">Hooks2</Nav.Link>
            <Nav.Link href="/Hooks3">Hooks3</Nav.Link>
            <Nav.Link href="/UseEffect">Hooks4</Nav.Link>
            <Nav.Link href="/UseRef">Hooks5</Nav.Link>
            <Nav.Link href="/UseMemo">Hooks6</Nav.Link>
            <Nav.Link href="/UseCallback">Hooks7</Nav.Link>
            <Nav.Link href="/UseContext">Hooks8</Nav.Link>
            <Nav.Link href="/Networking">Networking</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Study />}></Route>
        <Route path="/animalfriends" element={<Parent />}></Route>
        <Route path="/babo" element={<Babo />}></Route>
        <Route path="/Clock" element={<Clock />}></Route>
        <Route path="/Comment" element={<CommentList />}></Route>
        <Route path="/rps" element={<RpsGame />}></Route>
        <Route path="/notify" element={<NotificationList />}></Route>
        <Route path="/Hooks1" element={<Hooks1 />}></Route>
        <Route path="/Hooks2" element={<Hooks2 />}></Route>
        <Route path="/Hooks3" element={<Hooks3 />}></Route>
        <Route path="/UseEffect" element={<UseEffect />}></Route>
        <Route path="/UseRef" element={<UseRef />}></Route>
        <Route path="/UseMemo" element={<UseMemo />}></Route>
        <Route path="/UseCallback" element={<UseCallback />}></Route>
        <Route path="/UseContext" element={<UseContext />}></Route>
        <Route path="/Networking" element={<Networking />}></Route>
      </Routes>
    </div>
  );
}

export default App;
