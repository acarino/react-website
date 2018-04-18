import React, {Component} from 'react';
import FadeIn from 'react-fade-in';

class Home extends Component {
 render() {
   return (
     <div className="App-Page">
     <FadeIn>
      <h1 className="page-title">Welcome to CrowdSurfer!</h1>
      <div className="page-contents-wrapper"> &nbsp;</div>
    </FadeIn>
    </div>
    );
  }
}
export default Home
