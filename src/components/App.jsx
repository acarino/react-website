import React, {Component} from 'react'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import '../assets/styles/App.css';
import * as routes from '../constants/routes.jsx';
import { firebase } from '../firebase';
import Home from '../pages/home.jsx'
import About from '../pages/about.jsx'
import Signin from '../pages/signin.jsx'
import Portal from '../pages/portal.jsx'
import Account from '../pages/account.jsx'
import Signup from '../pages/signup.jsx'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

class App extends Component {
  constructor(props) {
   super(props);

   this.state = {
     authUser: null,
   };
 }

 componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      console.log("before auth user in dismout: ", authUser);
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
        console.log("after auth user in dismout: ", authUser);
    });
  }

 render() {
   return (
      <Router>
        <div className='App'>
          <Header authUser={this.state.authUser} />
          <Switch>
            <Route exact path={routes.HOME} component={Home} />
            <Route path={routes.HOMEPAGE} component={Home} />
            <Route path={routes.EXPLICIT_HOME} component={Home} />
            <Route path={routes.ABOUT} component={About} />
            <Route path={routes.SIGN_IN} component={Signin} />
            <Route path={routes.PORTAL} component={Portal} />
            <Route path={routes.SIGN_UP} component={Signup} />
            <Route path={routes.PASSWORD_FORGOT} component={Signin} />
            <Route path={routes.ACCOUNT} component={Account} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
