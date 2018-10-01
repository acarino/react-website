import React, {Component} from 'react'



class Contact extends Component {

constructor(props){
super(props);

}


render() {

  return(
      <React.Fragment>
          <img src={this.props.imgUrl} className="contactImg" />
          <br/>
          <b>{this.props.name}</b> - {this.props.title}
          <br />
          <span className="contactText">{this.props.text}</span>
      </React.Fragment>
    );
  }
}

export default Contact
