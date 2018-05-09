import React, {Component} from 'react';
import FadeIn from 'react-fade-in';
import AuthUserContext from '../components/authusercontext.jsx';
import { db } from '../firebase';
import {connect} from 'react-redux';
import store from "../react/store/index";
import { addUsers } from "../react/actions/index";


const mapStateToProps = state => {
  return { users: state.users };
};


class AdminPage extends Component{
  constructor(props) {
   super(props);

   this.store = store;
   this.addUsers = addUsers;
   this.state = {
     users:null,
     currentuseruid:null,
     isAdmin:false,
   };
 }

 componentDidMount() {
   const self = this;
   console.log("the mount: ",store.getState().users);

   if(store.getState().users.length === 0 ){
     console.log("calling user db: ",self.store.getState().users);
     db.onceGetUsers().then(snapshot => {
       self.store.dispatch( addUsers({ users: snapshot.val(), id: 1 }) )
       //this.setState(() => ({ users: snapshot.val() }))
       console.log("after calling user db: ",self.store.getState());
     }
     );
   }

 }
render() {
  //const { users } = this.store.getState();


  return (
    <div className="App-Page">
      <FadeIn>
        <h1 className="page-title">CrowdSurfer Admin Page</h1>
          <div className="page-contents-wrapper">
            <AuthUserContext.Consumer>
              {authUser =>
                <div>
                  <div>
                    {console.log('Is admin: ', Object.values(authUser)[1])}
                    {!!Object.values(authUser)[1]  && !!this.store.getState().users && !!this.store.getState().users[0] && <UserList users={this.store.getState().users[0].users} /> }
                    {!Object.values(authUser)[1] && <PermissionDenied /> }
                  </div>&nbsp;
                </div>
              }
            </AuthUserContext.Consumer>
          </div>
      </FadeIn>
    </div>
    );
  }
}

const PermissionDenied = () =>
<div>Access to this page is restricted</div>

const UserList = ({ users }) =>
<div>
  <p>Users who have signed up:</p>
  {console.log("this is the user list", store.getState())}
  {Object.keys(users).map(key =>
    <div key={key}>{users[key].username}</div>
  )}
</div>



export default connect(mapStateToProps)(AdminPage);;
