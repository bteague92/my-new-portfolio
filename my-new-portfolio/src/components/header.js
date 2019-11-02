import React from 'react';
import './../images/BrandonPic.PNG';
import styled from "styled-components";

const Container = styled.div`

width: 95%;
margin: 0 auto;

section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid black;
    margin: 1vw 0 1vw 0;
    
    .profilePic{
        margin: 2% auto;
        width: 50%;

        img{

        }
    }
    .name{
        display: flex;
        flex-direction: column;
        align-items: center;

        h1{
            font-size: 3vw;
            margin: 0;
        }
        h2{
            font-size: 2vw;
            margin: 0;
        }
        button{
            margin: 2vw;
            width: 18vw;
            font-size: 1.5vw;
            border-radius: 10px;
        }
    }
}

`;


const Header = (props) => {
    return (
        <Container>
            <section>
                <div className="profilePic">
                    <img src="BrandonPic.PNG" alt="Picture" />
                </div>
                <div className="name">
                    <h1>Brandon Teague</h1>
                    <h2>Full Stack Web Developer/Designer</h2>
                    <button>Download Resume</button>
                </div>
            </section>
        </Container>
    )
}

export default Header;