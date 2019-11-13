import React from 'react';
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background: rgb(0, 50, 128);
padding: 0vw 2.8vw 0vw 2.8vw;
box-shadow: 0vw 1.5vw 5px black;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

const Logo = styled.div`
color: white;
font-size: 2vw;
margin: 0;
`;

const Nav = styled.nav`
width: 60%;
display: flex;
justify-content: space-around;
`;

const NavItem = styled.a`
color: white;
text-decoration: none;
font-size: 2.5vw;
font-weight: 700;
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