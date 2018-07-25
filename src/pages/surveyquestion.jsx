import React, {Component} from 'react';
import FadeIn from 'react-fade-in';
import { FadeLoader } from 'react-spinners';
import { functions } from '../firebase';
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
          <div className="page-contents-wrapper">
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

//////////////////////////////////////form/////////////////
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

var surveysTaken = 0;
const totalSurveys = 3;
var finalTotalArray = []

const surveyItems = [[
  'Pepperoni',
  'Pineapple',
  'Sausage',
],
[
  'Prosciutto',
  'Broccoli',
  'Onions'
],
[
  'Olives',
  'Tuna',
  'Ham',
]
]
;

var finalItemOrder = [];

class SurveyForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.state.itemsForDragForm = surveyItems[0];
  }

  componentDidMount(){
    this.handleItemListChange = this.handleItemListChange.bind(this);
    this.survey1Input.focus();
  }

handleItemListChange(orderValues) {
//console.log("got in handle:",orderValues)
finalItemOrder = [];
    for(var i = 0; i<orderValues.length; i++) {
      finalItemOrder[i] = surveyItems[surveysTaken][orderValues[i]]
    }
    //console.log("finalItemOrder in handle:",finalItemOrder)
  }

  onSubmit = (event) => {
    const thisRef = this;
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
          console.log(errorText, error);
          thisRef.setState(() => ({ error: errorText}));
          thisRef.setState(() => ({ loading: false }))
          thisRef.setState(() => ({ showForm: true }))
          thisRef.setState(() => ({ initialForm: true }))
        });
      }
      else{
        surveysTaken++;

        if(finalItemOrder.length > 0){
          console.log("finalItemOrder is not empty- survey:"+surveysTaken, finalItemOrder);
          finalTotalArray[surveysTaken] = finalItemOrder;
          console.log("saved state:",finalTotalArray[surveysTaken])
          finalItemOrder = [];
        }
        else{
          console.log("finalItemOrder is  empty", surveyItems[surveysTaken-1]);
          finalTotalArray[surveysTaken] = surveyItems[surveysTaken-1];
        }
        console.log("surveysTaken",surveysTaken)
        console.log("totalSurveys",totalSurveys)
        if (surveysTaken === 1 || surveysTaken === 2) {
          //set next survey
          console.log("setting sList to:",surveyItems[surveysTaken])
          this.setState(() => ({ itemsForDragForm: surveyItems[surveysTaken] }))
          this.setState(() => ({ loading: false }))
          this.setState(() => ({ showForm: true }))
        }
        else {
          //done with survey
          const finalString = finalTotalArray[1]+" and "+finalTotalArray[2]+" and "+finalTotalArray[3];
          this.setState(() => ({ survey2Answer: finalString }))
          console.log("final state",this.state)
          surveysTaken = 0;
      }
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
            ref={(input) => { this.survey1Input = input; }}
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
          { console.log("error is",error) }
          { error && <p className="App-Text-Error" >{error}</p> }
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
          <div>Drag these toppings into order you like best from top to bottom</div>
          <br/>
          <div className="drag-list-outer">
            <OrderList
              ref={(list) => { this.orderListRef = list; }}
              sList={this.state.itemsForDragForm}
              onChange={this.handleItemListChange}
             />
            <br/>
            <br/>
            <button className="order-list-button" type="submit">Submit</button>
          </div>
        </div>

          {this.state.survey2Answer && <p className="App-Text" >You chose {this.state.survey2Answer}.  <br/>Thank you for taking the survey</p> }
          { error && <p className="App-Text-Error" >{error.message}</p> }
      </form>
    );
  }
}

export default Survey

export {
  SurveyForm,
}
