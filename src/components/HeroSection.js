import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 0rem;
    margin-right: 100rem;
  }
  .hero__heading {
    font-size: 2rem;
    margin-top: 0rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 6rem;
      color: var(--white);
      margin-bottom: 7rem;
    }
  }
  .hero__img {
    max-width: 500px;
    width: 97%;
    height: 600px;
    margin: 0 auto;
    border-radius: 2rem;
    border: 2px solid var(--gray-1);
  }
  .hero__info .btn {
    background-color: gold !important;
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.7rem;
          transform: rotate(0deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 800px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 2.5rem;
        margin-bottom: -3rem;
      }
    }
    .hero__img {
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 3px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 3px;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Allan Kiprop</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              I am working as a web developer and designer, with 4 years of
              experience. I love to design and make new web experiences
            </PText>
            <Button
              className="btn"
              btnText="See My Works"
              btnLink="/projects"
            />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>FOLLOW</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="http://facebook.com/allan.kiprop.58958"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="http://twitter.com/KipTheDon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="http://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a
                    href="http://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
