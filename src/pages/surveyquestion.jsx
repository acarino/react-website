import React, {Component} from 'react';
import FadeIn from 'react-fade-in';
import { FadeLoader } from 'react-spinners';
import { functions } from '../firebase';
import * as routes from '../constants/routes.jsx';
import OrderList from '../components/orderlist.jsx'

class Survey extends Component {
  constructor(props){
    super(props);

    this.state = {
      retrievedInfo:null,
      email: '',
      error:null,
    };
  }

   callCloudFunction = (str) =>{
     const hiWorld =  functions.httpsCallable(str);
     //url example:
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
  'Pepperoni',
  'Pineapple',
  'Sausage',
];

const surveyItems1 = [
  'Prosciutto',
  'Broccoli',
  'Onions'
];

const surveyItems2 = [
  'Olives',
  'Tuna',
  'Ham',
];

var finalItem1Order = [];

class SurveyForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
    this.handleItemListChange = this.handleItemListChange.bind(this);
  }

handleItemListChange(orderValues) {
  console.log("list item change in parent:", orderValues)
  this.setState({ ["itemList"]: orderValues });
  for(var i = 0; i<orderValues.length; i++) {
finalItem1Order[i] = surveyItems[orderValues[i]]}

console.log("this is the order of the list a top evel",finalItem1Order);
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
        var resultSet = "Bananna";

        this.setState(() => ({ survey2Answer: resultSet }))
        this.setState(() => ({ loading: false }))
    }
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
          <div>Drag these toppings into order you like best (top to bottom)?</div>
          <br/>
          <div className="demo8-outer">
            <OrderList
              sList={surveyItems}
              onChange={this.handleItemListChange}
              value={this.state["itemList"]} />
            <br/>
            <br/>
            <button className="order-list-button" type="submit">Submit</button>
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
