import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/clbhs.jpeg';
import GreenCtgImg from '../images/twt.jpg';
import CoinTrackerImg from '../images/amznp.jpg';
import CavinImg from '../images/disny.jpg';
import Track from '../images/car.jpg';

const projects = [
  {
    id: uuidv4(),
    lk: 'https://c-house-a54c7.web.app',
    name: 'Clubhouse-cln',
    desc: 'An audio-based application allowing people everywhere to talk, develop and share concrete ideas.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    lk: 'https://www.twitter.com',
    name: 'Twitter-cln',
    desc: 'An app to help people to get an overview of the current affairs and make their issues matter.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    lk: 'https://www.amazon.com',
    name: 'Amazon-cln',
    desc: 'Using this app you can order any product. Also you will get good tracking information.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    lk: 'https://www.disney.com',
    name: 'Disney-cln',
    desc: 'An app with a mission to entertain, inform and inspire people to do more through unparrarelled storytelling and reflection.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    lk: 'https://www.youtube.com',
    name: 'Tracking Soft',
    desc: 'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    lk: 'https://www.volvo.com',
    name: 'Car Locate',
    desc: 'A tracking solution that will show the location of your car at anytime. Also you will get some useful advice to improve its performance.',
    img: Track,
  },
];

export default projects;
