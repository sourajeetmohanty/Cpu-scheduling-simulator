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
      <Navbar color="light" light expand="md">
        <NavbarBrand activeClassName="active" tag={RRNavLink} to="/">Home</NavbarBrand>
        <NavbarBrand ctiveClassName="active" tag={RRNavLink} to="/fcfs">FCFS</NavbarBrand>
        <NavbarBrand activeClassName="active" tag={RRNavLink} to="/sjf">SJF</NavbarBrand>
        <NavbarBrand activeClassName="active" tag={RRNavLink} to="/roundrobin">Round Robin</NavbarBrand>
        <NavbarBrand activeClassName="active" tag={RRNavLink} to="/priority">Priority Scheduling</NavbarBrand>
        
      </Navbar>
    </div>
  );
}

export default Navi;