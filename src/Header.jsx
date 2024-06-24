import React, { useState } from "react";
import { Navbar, Nav, Dropdown, Form, FormControl, Button, Container, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import Logout from "./Logout";
import "./header.css";
import Query from "./Query";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Query sent: " + query);
    setQuery(search);

    // navigate("/query");
  };
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/general">News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/general">Home</Nav.Link>
              <Nav.Link href="/business">Business</Nav.Link>
              <Nav.Link href="/entertainment">Entertainment</Nav.Link>
              <Nav.Link href="/health">Health</Nav.Link>
              <Nav.Link href="/science">Science</Nav.Link>
              <Nav.Link href="/sports">Sports</Nav.Link>
              <Nav.Link href="/technology">Technology</Nav.Link>
              <NavDropdown title="Languages" id="basic-nav-dropdown">
                <NavDropdown.Item href="/language/cn">Chinese</NavDropdown.Item>
                <NavDropdown.Item href="/language/jp">Japanese</NavDropdown.Item>
                <NavDropdown.Item href="/language/ru">Russian</NavDropdown.Item>
                <NavDropdown.Item href="/language/si">Slovenian</NavDropdown.Item>
                <NavDropdown.Item href="/language/ch">Swiss</NavDropdown.Item>
                <NavDropdown.Item href="/language/it">Italian</NavDropdown.Item>
                <NavDropdown.Item href="/language/th">Thai</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Countries" id="basic-nav-dropdown">
                <NavDropdown.Item href="/language/us">USA</NavDropdown.Item>
                <NavDropdown.Item href="/language/in">India</NavDropdown.Item>
                <NavDropdown.Item href="/language/ca">Canada</NavDropdown.Item>
                <NavDropdown.Item href="/language/nz">New Zealand</NavDropdown.Item>
                <NavDropdown.Item href="/language/sa">South Africa</NavDropdown.Item>
                <NavDropdown.Item href="/language/au">Australia</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link href="/advancedsearch" className="btn btn-light text-dark mx-2 d-flex align-items-center">
                <FontAwesomeIcon icon={faSearch} className="me-2" />
                Search
              </Nav.Link>
              <Nav.Link href="/news/form" className="btn btn-secondary mx-2">
                Feedback
              </Nav.Link>
              <Logout />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Query query={query} />
    </>
  );
};

export default Header;
