import React from 'react';
import styled from "styled-components";

const Container = styled.div`

.middleSection {
    .display(row-reverse, space-around, center);
    width: 80%;
    background: rgb(0, 50, 128);
    padding: 2vw;
    margin: 5% 0 5% 0;
    box-shadow: 1.5vw 1.5vw 5px black;
    border-radius: 0 25px 25px 0;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

    .aboutMe {
      .display(column, center, center);
      color: white;
      width: 100%;

      .sectionHeader {

        h2 {
          font-size: 2.9vw;
          border-bottom: 0.1vw solid white;
          margin: 1% auto;
          text-align: center;
        }
      }
      .sectionText {

        p {
          font-size: 2.1vw;
          margin: 1% auto;
          text-align: center;
          font-weight: 500;
        }
      }
    }
  }
`;

const About = (props) => {
  return (
    <Container>
      <section className="middleSection">
        <div id="aboutMe" className="aboutMe">
          <div className="sectionHeader">
            <h2>About Me</h2>
          </div>
          <div className="sectionText">
            <p>
              I decided to persue a career as a web developer because I've always
              been interested in creating things and solving problems. I spent a
              few months learning on my own, but decided to attend Lambda School
              so I could have a structured learning environment and superior
              support network. I am currently a little over a month in, and I'm
              excited about my future.
                        </p>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default About;