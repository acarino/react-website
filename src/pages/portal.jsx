import React, {Component} from 'react';
import FadeIn from 'react-fade-in';
import { functions } from '../firebase';
//import * as functions from 'firebase-functions'


class Portal extends Component {
  constructor(props){
    super(props);

    this.state = {
      retrievedInfo:null,
      email: '',
      error:null,
    };
  }

  componentDidMount() {

   }



   callCloudFunction = (str) =>{
     const hiWorld =  functions.httpsCallable(str);
     //https://us-central1-crowdsurfer-2fccd.cloudfunctions.net/helloWorld
     hiWorld("test").then(response => {
       console.log("response from NLP function: ", response.data.myData);
       this.setState(() => ({ retrievedInfo: response.data.myData }))
    }).catch(function(error) {
      var code = error.code;
      var message = error.message;
      var details = error.details;
      console.log("error code: "+code+" message: "+message+" details: "+details)
    });
  }

render() {

  return(
      <div className="App-Page">
        <FadeIn>
          <h1 className="page-title">CrowdSurfer Portal</h1>
            <button onClick={() => this.callCloudFunction('helloWorld')}>Hello world</button>
            <button onClick={() => this.callCloudFunction('helloWorld1')}>Hello world 1</button>
            <button onClick={() => this.callCloudFunction('helloWorld2')}>Hello world 2</button>
            <button onClick={() => this.callCloudFunction('helloWorld3')}>Hello world 3</button>

            <button onClick={() => this.callCloudFunction('callNLP')}>Hello world 3</button>

          <div className="page-contents-wrapper"> &nbsp;<br/>
          <div>
            <SurveyForm />
          </div>
          <div>
            {this.state.retrievedInfo}
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  retrievedInfo:null,
  surveyText: '',
  error: null,
};

class SurveyForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      surveyText,
    } = this.state;

    console.log("user input before call: "+surveyText);

    const getNLP =  functions.httpsCallable('callNLP');
      //https://us-central1-crowdsurfer-2fccd.cloudfunctions.net/callNPL
    getNLP(surveyText).then(response => {
      console.log("got it?: ", JSON.stringify(response.data));
      this.setState(() => ({ retrievedInfo: JSON.stringify(response.data) }))
    }).catch(function(error) {
      var code = error.code;
      var message = error.message;
      var details = error.details;
      var errorText = "error code: "+code+" message: "+message+"; details: "+details;
      console.log(errorText);
      this.setState(byPropKey('error', errorText));
    });

    event.preventDefault();
  }

  render() {
    const {
      surveyText,
      retrievedInfo,
      error,
    } = this.state;

    const isInvalid =
      surveyText === '';

    return (
      <form onSubmit={this.onSubmit}>
        <div>What is your favorite pizza topping?</div>
        <br />
        <input
          value={surveyText}
          onChange={event => this.setState(byPropKey('surveyText', event.target.value))}
          type="text"
          placeholder="Your Answer"
        />

        <br/><br/>
        <button disabled={isInvalid} type="submit">
          Submit Survey
        </button>
        { retrievedInfo && <p className="App-Text" >{retrievedInfo}</p> }
        { error && <p className="App-Text-Error" >{error.message}</p> }
      </form>
    );
  }
}

export default Portal

export {
  SurveyForm,
}
