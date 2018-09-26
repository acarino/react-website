import React, {Component} from 'react';
import FadeIn from 'react-fade-in';
import Contact from '../components/contact.jsx'

const Alan = {
  Name:"Alan Carino",
  Title:"CTO",
  Text:"A technologist with a zeal for creating delight for customers",
  Url: "https://m.media-amazon.com/images/M/MV5BMTg1Njg4MzQxNV5BMl5BanBnXkFtZTcwNDgzNDUwMw@@._V1_.jpg"
};

const Mike = {
  Name:"Mike Bonheim",
  Title:"CEO",
  Text:"A long time enthusiastic entrepreneur",
  Url: "https://m.media-amazon.com/images/M/MV5BMjEwMDEwOTg0M15BMl5BanBnXkFtZTcwNzkyMTM3NA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  };

class About extends Component{

  render(){
    return(

  <div className="App-Page">
    <FadeIn>
      <h1 className="page-title">About CrowdSurfer!</h1>
      <div className="page-contents-wrapper">&nbsp; </div>
      <Contact text={Mike.Text} imgUrl={Mike.Url} name={Mike.Name} title={Mike.Title} />
      <p /><p /> <p /><div>&nbsp;</div>
      <Contact text={Alan.Text} imgUrl={Alan.Url} name={Alan.Name} title={Alan.Title} />
    </FadeIn>
  </div>
)}
}
export default About
