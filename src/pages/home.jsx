import React, {Component} from 'react';
import FadeIn from 'react-fade-in';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

import Bench from '../assets/images/1.jpeg';
import Wheat from '../assets/images/2.jpeg';
import City from '../assets/images/3.jpeg';


class Home extends Component {
 render() {
   return (
     <div className="App-Page">
     <FadeIn>
      <h1 className="page-title">Welcome to CrowdSurfer!</h1>
        <div className="page-contents-wrapper">
          <Carousel  showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true}>
            <div className="xApp-Slider">
                 <img src={City} />

             </div>
             <div className="xApp-Slider">
                 <img src={Wheat} />

             </div>
             <div className="xApp-Slider">
                 <img src={Bench} />

             </div>
             </Carousel>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
    </FadeIn>
    </div>
    );
  }
}
export default Home
