import React, {Component} from 'react'

class Contact extends Component {

render() {

  return(
      <div>
          <img src={this.props.imgUrl} className="contactImg" />
          <br/>
          <b>{this.props.name}</b> - {this.props.title}
          <br />
          <span className="contactText">{this.props.text}</span>
      </div>
    );
  }
}

export default Contact
