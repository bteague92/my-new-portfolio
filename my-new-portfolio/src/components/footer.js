import React from 'react';
import styled from "styled-components";

const Container = styled.div`
footer {
  background: rgb(0, 50, 128);
    color: white;
    border-radius: 9px 9px 0 0;
    padding: 0.1vw;
    
    address {
      padding: 1.5vh;
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 1.3vw;
        margin: 0;
      }
      h4{
        margin: 0;
      }
      a {
        font-size: 1.4vw;
        margin: 0;
        text-decoration: none;
        color: rgb(60, 200, 200);
      }
    }
  }
  
`;

const Footer = (props) => {
  return (
    <Container>
      <footer id="contact">
        <address>
          <h3>Contact Info:</h3>
          <h4>Email: <a href="mailto:[brandon.teague5@gmail.com]" target="_blank">brandon.teague5@gmail.com</a></h4>
          <a href="https://www.linkedin.com/in/brandon-teague" target="_blank">LinkedIn</a>
          <a href="https://www.instagram.com/bteague92" target="_blank">Instagram</a>
          <a href="https://www.twitter.com/bteague92" target="_blank">Twitter</a>
        </address>
      </footer>
    </Container>
  )
}

export default Footer;