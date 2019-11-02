import React from 'react';
import styled from "styled-components";

const Container = styled.div`
footer {
    background: rgb(39, 77, 128);
    color: white;
    border-radius: 9px 9px 0 0;
    padding: 0.1vw;
    
    address {
      padding: 1.5vh;
      h3 {
        font-size: 1.3vw;
        margin: 0;
      }
      h4 {
        font-size: 1.4vw;
        margin: 0;
      }
    }
  }
  
`;

const Footer = (props) => {
    return (
        <Container>
            <footer>
                <address>
                    <h3>Contact Info:</h3>
                    <h4>Email: brandon.teague5@gmail.com</h4>
                </address>
            </footer>
        </Container>
    )
}

export default Footer;