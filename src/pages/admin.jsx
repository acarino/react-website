import React, {Component} from 'react';
import FadeIn from 'react-fade-in';
import AuthUserContext from '../components/authusercontext.jsx';
import { db } from '../firebase';

class AdminPage extends Component{
  constructor(props) {
   super(props);

   this.state = {
     users: null,
     currentuseruid:null,
     isAdmin:false,
   };
 }

 componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }
render() {
  const { users } = this.state;


  return (
    <div className="App-Page">
      <FadeIn>
        <h1 className="page-title">CrowdSurfer Admin Page</h1>
          <div className="page-contents-wrapper">
            <AuthUserContext.Consumer>
              {authUser =>
                <div>
                  <div>
                    {console.log('lets see if admin', Object.values(authUser)[1])}
                    {!!Object.values(authUser)[1]  && !!users && <UserList users={users} /> }
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
  {console.log("this is the user list", users)}
  {Object.keys(users).map(key =>
    <div key={key}>{users[key].username}</div>
  )}
</div>

export default AdminPage;
