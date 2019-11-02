import React from 'react';
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background: rgb(39, 77, 128);
padding: 0vw 2.8vw 0vw 2.8vw;
`;

const Logo = styled.div`
color: white;
`;

const Nav = styled.nav`
width: 60%;
display: flex;
justify-content: space-around;
`;

const NavItem = styled.a`
color: white;
text-decoration: none;
`;

const NavBar = (props) => {
    return (
        <Container>
            <Logo>
                <h1>B</h1>
            </Logo>
            <Nav>
                <NavItem href="#">Home</NavItem>
                <NavItem href="#aboutMe">About</NavItem>
                <NavItem href="#skills">Skills</NavItem>
                <NavItem href="#projects">Projects</NavItem>
                <NavItem href="#contact">Contact</NavItem>
            </Nav>
        </Container>
    )
}

export default NavBar;