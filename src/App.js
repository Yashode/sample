import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';import {Col} from 'react-bootstrap';
import{Dropdown} from 'react-bootstrap';



function App(){

  return(

    <div class="bg">
    
    <Row>
    <Col md="12">
    <Navbar className="navbar"  expand="lg">
    <Col md="7">
      <Navbar.Brand href="#home">Asliyat.com</Navbar.Brand>
    </Col>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    
    <Nav className="mr-auto">
    <Col md="3" >
      <Nav.Link href="#sell"> <Button  className="btn-circle" type="button">Sell</Button></Nav.Link>
    </Col>
    <Col md="auto" className="btn-home">  
      <Nav.Link href="#home"><span style={{color:"black"}}>Home</span></Nav.Link>
    </Col>
    <Col md="auto">
      <Nav.Link className="btn-aboutUs" href="#aboutUs"><span style={{color:"black"}}>About Us</span></Nav.Link>
    </Col>
    <Col md="auto">
      <NavDropdown className="btn-dropDown" title=<i class="fas fa-bell"></i> id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Best Deals</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Offers</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Sales</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">New Arrivals</NavDropdown.Item>
      </NavDropdown>
    </Col>

    <Col md="auto">
      <NavDropdown className="btn-dropDown" title=<i class="fas fa-cog"></i> id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Support</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Mode</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
      </NavDropdown>
    </Col>

    <Col md="auto">
      <Nav.Link className="btn-aboutUs" href="#signout"><i class="fa fa-sign-out-alt"></i></Nav.Link>
    </Col>


    </Nav>
    </Navbar.Collapse>
    </Navbar>
    </Col>
    </Row>
    

    <div>
    <Row className="justify-content-md-center search-bar">    

    <Col md ="auto">
    <Dropdown>
      <Dropdown.Toggle className="btn-ddwn" id="dropdown-basic">
      Property Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Residential</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Comercial</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Rent</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
    </Col>
    
    <Col md ="auto">
    <Dropdown>
      <Dropdown.Toggle className="btn-ddwn" id="dropdown-basic">
        City
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Delhi</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Mumbai</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Noida</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
    </Col>
      
      <Col md="auto">
      <Form inline >
      <FormControl type="text" placeholder="Type Location or Project/Society or Keyword" className="input mr-sm-2" />
      <Button className="btn-ddwn"><i class="fas fa-search"></i> Search</Button>
      </Form>
      </Col>
    </Row>
    </div>
    


    </div>  

  )
}

export default App;