import React from 'react';
import Brandon from './../images/BrandonPic.PNG';
import styled from "styled-components";
import Resume from "./../images/Resume.pdf";

const Container = styled.div`

width: 95%;
margin: 0 auto;

section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid white;
    margin: 1vw 0 1vw 0;
    padding: 0 0 3% 0;
    
    .profilePic{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2% auto;
        width: 100%;

        img{
            margin: 4%;
            padding: 0;
            border-radius: 50%;
            width: 40%;
        }
    }
    .name{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

        h1{
            font-size: 4vw;
            margin: 0 0 2% 0;
        }
        h2{
            font-size: 2.5vw;
            margin: 0;
        }
        button{
            margin: 4vw 0 2vw 0;
            width: 22vw;
            font-size: 1.9vw;
            border-radius: 15px;
            background: aqua;
            font-weight: 600;
        }
    }
}

`;


const Header = (props) => {



    return (
        <Container>
            <section>
                <div className="profilePic">
                    <img src={Brandon} alt="Picture" />
                </div>
                <div className="name">
                    <h1>Brandon Teague</h1>
                    <h2>Full Stack Web Developer/Designer</h2>
                    <a href={Resume} target="_blank"><button>Download Resume</button></a>
                </div>
            </section>
        </Container>
    )
}

export default Header;