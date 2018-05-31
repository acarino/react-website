import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import * as routes from '../constants/routes.jsx';

class Portal extends Component {
render() {
  return(
      <div className="App-Page">
        <FadeIn>
          <h1 className="page-title">CrowdSurfer Portal</h1>
          <div className="page-contents-wrapper">
          <br/><br/><br/><br/><br/>
            <div className="Survey-Button-Wrapper">
              <SurveyButton />
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }
}

const SurveyButton = ({history}) =>
<Link id="takeSurvey" to={routes.SURVEY}
  className="Sign-In-Button-Link">
  <div className="Survey-Button-Div">Take Survey Now!</div>
</Link>

export default Portal
