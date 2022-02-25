import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--gold);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
    margin-bottom: 0%;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: black;
  }
  .mapTxt {
    color: white;
    font-size: 2rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
    color: black;
  }
  .map__card__link: hover {
    color: blue;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">I'm Here</h3>
          <p className="mapTxt">Britam Tower, Upperhill, Nairobi</p>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Britam+Tower/@-1.299784,36.812935,92m/data=!3m1!1e3!4m5!3m4!1s0x0:0xa0ed00f15f7f1a03!8m2!3d-1.2999367!4d36.8132235?hl=en-US"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      <img src={MapImg} alt="Map" />
    </MapStyles>
  );
}
