import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "./logo.png";

export default function Header({
  onSelectedTopicChange,
  onSelectedQuestionChange,
}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [searchTopic, setSearchTopic] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  const handleInputChange = (event) => {
    setSearchTopic(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSelectedQuestionChange(`&q=${searchTopic}`);
  };

  return (
    <Navbar className="header" expand="lg">
      <Navbar.Brand href="#" className="extra-bold">
        <img src={logo} alt="Daily News" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavItem>
            <Button variant="light" disabled className="category">
              {formatTime(currentDate)}
            </Button>
          </NavItem>
          <NavItem>
            <Button
              variant="light"
              onClick={() => onSelectedTopicChange("&category=general")}
              className="category"
            >
              General
            </Button>
          </NavItem>
          <NavItem>
            <Button
              variant="light"
              className="category"
              onClick={() => onSelectedTopicChange("&category=business")}
            >
              Business
            </Button>
          </NavItem>
          <NavItem>
            <Button
              variant="light"
              className="category"
              onClick={() => onSelectedTopicChange("&category=science")}
            >
              Science
            </Button>
          </NavItem>
          <NavItem>
            <Button
              variant="light"
              className="category"
              onClick={() => onSelectedTopicChange("&category=health")}
            >
              Health
            </Button>
          </NavItem>
          <NavItem>
            <Button
              variant="light"
              className="category"
              onClick={() => onSelectedTopicChange("&category=technology")}
            >
              Technology
            </Button>
          </NavItem>
          <NavItem>
            <Button
              variant="light"
              className="category"
              onClick={() => onSelectedTopicChange("&category=sports")}
            >
              Sports
            </Button>
          </NavItem>
        </Nav>
        <Form onSubmit={handleSubmit} className="form-inline">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-sm-2 form"
            onChange={handleInputChange}
            id="searchInput"
            name="search"
          />
          <Button
            variant="outline-success"
            type="submit"
            className="form search"
          >
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
