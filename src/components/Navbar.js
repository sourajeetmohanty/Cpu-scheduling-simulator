import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { NavLink as RRNavLink } from "react-router-dom";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{backgroundColor: '#000'}} dark expand="md">
        <NavbarBrand activeClassName="active" tag={RRNavLink} to="/">Home</NavbarBrand>
        <NavbarBrand ctiveClassName="active" tag={RRNavLink} to="/fcfs">FCFS</NavbarBrand>
        <NavbarBrand activeClassName="active" tag={RRNavLink} to="/sjf">SJF</NavbarBrand>
        <NavbarBrand activeClassName="active" tag={RRNavLink} to="/roundrobin">Round Robin</NavbarBrand>
        <NavbarBrand activeClassName="active" tag={RRNavLink} to="/priority">Priority Scheduling</NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
        </Nav>
        <NavLink activeClassName="active" href="https://github.com/sourajeetmohanty/Cpu-scheduling-simulator">GitHub</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;