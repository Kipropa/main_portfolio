import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: center;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Allan Kiprop</h1>
          <PText>
            A freelance web designer and developer from Upperhill, Nairobi,
            making websites, apps and solutions that have unique designs with
            great performance rates.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+254717121255',
                path: 'tel:+254717121255',
              },
              {
                title: 'kipropa77@gmail.com',
                path: 'mailto:kipropa77@gmail.com',
              },
              {
                title: 'Britam Tower, Upperhill, Nairobi',
                path: 'https://www.google.com/maps/place/Britam+Tower/@-1.299784,36.812935,92m/data=!3m1!1e3!4m5!3m4!1s0x0:0xa0ed00f15f7f1a03!8m2!3d-1.2999367!4d36.8132235?hl=en-US',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/kipropa',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com/KipTheDon',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2024 - Allan Kiprop |
            <a target="_blank" rel="noreferrer" href="http://donkipdevops.com">
              {' '}
              Kipropa DevOps
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
