/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PText from '../components/PText';
import AboutImg from '../assets/images/hero.png';
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
      color: white;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      border-radius: 8rem;
      mask-image: linear gradient (to bottom rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }
  }
  .about__info__items {
    margin-top: 5rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .cvBtn {
    background-color: gold;
    font-size: 20px;
    border-radius: 10px;
    padding: 0.7em 2em;
    border: none;
    box-shadow: 1px 2px 6px 0.5px white;
  }
  .cvBtn:hover {
    background-color: white;
    color: gold;
    box-shadow: 1px 2px 6px 0.5px gold;
    transition: 267ms ease-in background-color;
  }
  .textcv {
    color: black;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Allan Kiprop</span>
              </p>
              <h2 className="about__heading">A Web Engineer</h2>
              <div className="about__info">
                <PText>
                  I am from Upperhill, Nairobi. A place of beauty and nature.
                  Since my childhood, I've been pasionate about creating and
                  designing. I always design projects with my unique point of
                  view, creating masterpieces that can be usefull to others.
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with coding. I find it really interesting and
                  satisfying.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to advance.
                </PText>
              </div>
              <button className="cvBtn">
                <Link to="/files/Allan.pdf" target="_blank" download>
                  <p className="textcv">Download Resume</p>
                </Link>
              </button>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem title="Primary" items={['Borderlands']} />
              <AboutInfoItem title="High School" items={['Ngara Falls']} />
              <AboutInfoItem title="University" items={['Machakos ']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'PHP']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'After Effects', 'Figma']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2016-2017"
                items={['Freelance Junior Developer']}
              />
              <AboutInfoItem
                title="2018-2020"
                items={['Freelance Full Stack Developer ']}
              />
              <AboutInfoItem title="2021-" items={['Freelance Web Engineer']} />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
