/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--gold);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .text {
    color: white;
    font-size: 2rem;
  }
  .btn{
    background-color: black;
    font-size: 25px;
    border-radius: 10px;
    padding: 0.7em 2em;
    border: none;
    box-shadow: 3px 3px 6px 3px white;
    transition: 167ms ease-in-out background-color;
    color: gold;
  }
  .btn:hover {
    background-color: white;
    box-shadow: 3px 3px 6px 3px black;
    color: black;
    font-weight: 600;
    cursor: pointer;
  }

  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
    color: black;
  }
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <h2 className="text">Have a Project in Mind?</h2>
          <h3 className="contactBanner__heading">
            Let Me Deliver Top-notch Work to You Too!
          </h3>
          <Link to="/contact">
            <button className="btn"> Contact Me Now</button>
          </Link>
        </div>
      </div>
    </ContactBannerStyles>
  );
}
