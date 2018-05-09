import React, {Component} from 'react';
import FadeIn from 'react-fade-in';
import AuthUserContext from '../components/authusercontext.jsx';
import { db } from '../firebase';
import store from "../react/store/index";
import { addUsers } from "../react/actions/index";


class AdminPage extends Component{
  constructor(props) {
   super(props);

   this.store = store;
   this.addUsers = addUsers;
   this.state = {
     currentuseruid:null,
     isAdmin:false,
   };
 }

 componentDidMount() {
   const self = this;
   this.unsubscribe = store.subscribe(this.handleChange.bind(this))

   if(store.getState().users.length === 0 ){
     console.log("calling user db: ",self.store.getState().users);
     db.onceGetUsers().then(snapshot => {
       self.store.dispatch( addUsers({ users: snapshot.val()}) )
     }
     );
   }
 }

 componentWillUnmount() {
   this.unsubscribe()
 }

 handleChange() {
   this.forceUpdate()
 }

render() {
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

export default AdminPage;
