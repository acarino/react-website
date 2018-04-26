import React, {Component} from 'react';
import FadeIn from 'react-fade-in';
import { functions } from '../firebase';
//import * as functions from 'firebase-functions'


class Portal extends Component {
  constructor(props){
    super(props);

    this.state = {

    };
  }

  componentDidMount() {

   }




   callFunction = (str) =>{
    const hiWorld =  functions.httpsCallable(str);
  //https://us-central1-crowdsurfer-2fccd.cloudfunctions.net/helloWorld
    hiWorld().then(response => {

   console.log("got it?: ", response.data.myData);
    }
  ).catch(function(response){
    console.log('in catch: ',response);
    }
  ).then(response => console.log('Success:', response));
  }

render() {

  return(
      <div className="App-Page">
        <FadeIn>
          <h1 className="page-title">CrowdSurfer Portal</h1>
          <button onClick={() => this.callFunction('helloWorld')}>Hello world</button>
            <button onClick={() => this.callFunction('helloWorld1')}>Hello world 1</button>
            <button onClick={() => this.callFunction('helloWorld2')}>Hello world 2</button>
            <button onClick={() => this.callFunction('helloWorld3')}>Hello world 3</button>
          <div className="page-contents-wrapper"> &nbsp; </div>
        </FadeIn>
      </div>
    );
  }
}
export default Portal
