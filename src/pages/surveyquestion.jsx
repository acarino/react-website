import React, {Component} from 'react';
import FadeIn from 'react-fade-in';
import { FadeLoader } from 'react-spinners';
import Checkbox from '../components/checkbox.jsx'
import { functions } from '../firebase';
//import * as functions from 'firebase-functions'
import * as routes from '../constants/routes.jsx';


class Survey extends Component {
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
       console.log("response from cloud function: ", response.data.myData);
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
          <h1 className="page-title">CrowdSurfer Survey</h1>
          <div style={{'display':'none'}}>
          <button onClick={() => this.callCloudFunction('helloWorld')}>Hello world</button>
            <button onClick={() => this.callCloudFunction('helloWorld1')}>Hello world 1</button>
            <button onClick={() => this.callCloudFunction('helloWorld2')}>Hello world 2</button>
            <button onClick={() => this.callCloudFunction('helloWorld3')}>Hello world 3</button>
            <button onClick={() => this.callCloudFunction('callNLP')}>Hello world 3</button>
            </div>
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
  loading:false,
  showForm:true,
  initialForm:true,
};

const surveyItems = [
  'pepperoni',
  'pineapple',
  'sausage',
  'prosciutto',
  'broccoli',
];

class SurveyForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentWillMount = () => {
   this.selectedCheckboxes = new Set();
 }

 toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }


  onSubmit = (event) => {
    this.setState(() => ({ loading: true }))
    this.setState(() => ({ showForm: false }))

      if(this.state.initialForm)
      {
        const {
          surveyText,
        } = this.state;

        console.log("user input before call: "+surveyText);

        const getNLP =  functions.httpsCallable('callNLP');
      //https://us-central1-crowdsurfer-2fccd.cloudfunctions.net/callNPL
        getNLP(surveyText).then(response => {
          console.log("got it?: ", JSON.stringify(response.data));
          this.setState(() => ({ loading: false }))
          this.setState(() => ({ showForm: true }))
          this.setState(() => ({ retrievedInfo: JSON.stringify(response.data) }))
          this.setState(() => ({ initialForm: false }))
        }).catch(function(error) {
          var code = error.code;
          var message = error.message;
          var details = error.details;
          var errorText = "error code: "+code+" message: "+message+"; details: "+details;
          console.log(errorText);
          this.setState(byPropKey('error', errorText));
        });
      }
      else{
        var resultSet = "";
        for (const checkbox of this.selectedCheckboxes) {
          console.log(checkbox, 'is selected.');
          resultSet += checkbox + " ";
        }
        this.setState(() => ({ survey2Answer: resultSet }))
        this.setState(() => ({ loading: false }))
      }

    event.preventDefault();
  }

  createCheckbox = label => (
  <Checkbox
    label={label}
    handleCheckboxChange={this.toggleCheckbox}
    key={label}
  />
)

createCheckboxes = () => (
  surveyItems.map(this.createCheckbox)
)

  render() {
    const {
      surveyText,
      retrievedInfo,
      error,
    } = this.state;

    const isInvalid =
      surveyText === '';

    return (

      this.state.initialForm ?

      <form onSubmit={this.onSubmit}>
      <div className='LoadingSpinnerDiv'>
        <FadeLoader
          color={'#009999'}
          loading={this.state.loading}
        />
        </div>
        <div>What is your favorite pizza topping?</div>
        <br/>
        <div style={{display: this.state.showForm ? 'block' : 'none' }}>
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
        </div>
      </form>

      :

      <form onSubmit={this.onSubmit}>
      <div className='LoadingSpinnerDiv'>
        <FadeLoader
          color={'#009999'}
          loading={this.state.loading}
        />
        </div>
        <div style={{width:'100%', textAlign:'center', display: this.state.showForm ? 'block' : 'none' }}>
          <div>Which of these toppings do you like best?</div>
          <br/>
          <div className="Checkbox-Wrapper">
          {this.createCheckboxes()}
          <button className="btn btn-default" type="submit">Submit</button>
          </div>
        </div>
          { this.state.survey2Answer && <p className="App-Text" >You chose {this.state.survey2Answer}.  Thank you for taking the survey</p> }
          { error && <p className="App-Text-Error" >{error.message}</p> }
      </form>
    );
  }
}

export default Survey

export {
  SurveyForm,
}
