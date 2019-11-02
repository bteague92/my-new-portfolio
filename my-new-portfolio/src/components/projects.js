import React from 'react';
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;

.box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 14vw;
    border-radius: 20px;
    background: rgb(39, 77, 128);
    margin: 3%;
    text-align: center;
    color: white;
    padding: 1.5vw;

    h3{
        margin: 0 0 3vw 0;
    }

    a{
        color: rgb(155, 218, 254);
        margin: 1vw;
    }
}
`;

const Projects = (props) => {
    return (
        <Container>
            <div className="box">
                <h3>Github Followers Adventure</h3>
                <a href="#">See Github Repo</a>
            </div>
            <div className="box">
                <h3>Pintereach</h3>
                <a href="#">See Github Repo</a>
            </div>
            <div className="box">
                <h3>React Wars</h3>
                <a href="#">See Github Repo</a>
            </div>
            <div className="box">
                <h3>Pokemon Cards</h3>
                <a href="#">See Github Repo</a>
            </div>
        </Container>
    )
}

export default Projects;