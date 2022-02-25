import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  .container {
    margin-top: -20rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What I Will Do For You" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Design"
            desc="I do UI/UX design for websites that helps them to get unique looks to ensure sufficient hit rates."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            desc="I also engineer the websites, creating high performance websites with blazing fast speeds."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Development"
            desc="I develop mobile applications, to ensure that the services of your website are accessible anywhere. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
