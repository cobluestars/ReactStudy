import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Study from "./chapter3/Study";
import Parent from "./20230515/Parent";
import Babo from "./20230515/Babo";
import Clock from "./20230515/Clock";
import CommentList from "./20230515/CommentList";
import {Routes, Route, Link} from "react-router-dom";

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
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Study />}></Route>
        <Route path="/animalfriends" element={<Parent />}></Route>
        <Route path="/babo" element={<Babo />}></Route>
        <Route path="/Clock" element={<Clock />}></Route>
        <Route path="/Comment" element={<CommentList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
