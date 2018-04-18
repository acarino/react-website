import React, {Component} from 'react'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import '../assets/styles/App.css';
import * as routes from '../constants/routes.jsx';
import withAuthentication from './withauthentication.jsx';
import AuthUserContext from './authusercontext.jsx';
import Home from '../pages/home.jsx'
import About from '../pages/about.jsx'
import Signin from '../pages/signin.jsx'
import Portal from '../pages/portal.jsx'
import Account from '../pages/account.jsx'
import Signup from '../pages/signup.jsx'
import ForgotPassword from '../pages/forgotpassword.jsx'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

class App extends Component {
 render() {
   return (
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path={routes.HOME} component={Home} />
            <Route path={routes.HOMEPAGE} component={Home} />
            <Route path={routes.EXPLICIT_HOME} component={Home} />
            <Route path={routes.ABOUT} component={About} />
            <Route path={routes.SIGN_IN} component={Signin} />
            <Route path={routes.SIGN_UP} component={Signup} />
            <Route path={routes.PASSWORD_FORGOT} component={ForgotPassword} />
            <Route path={routes.ACCOUNT} component={Account} />
            <AuthUserContext.Consumer>
              {authUser => authUser
                ? <Route path={routes.PORTAL} component={Portal} />
                : <Route path={routes.PORTAL} component={Signin} />
              }
            </AuthUserContext.Consumer>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default withAuthentication(App);
