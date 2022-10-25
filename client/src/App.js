import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Routes, Route } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="homepage">
      <Navbar bg="primary" expand="lg" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand to="/">TO DO</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/add">
              <Nav.Link>Add To do</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>To do list</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </div>
  );
}
