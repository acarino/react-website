self.addEventListener('message', function(e) {
  console.log('in e: ', e.data);
  const userData = JSON.parse(e.data);
    if(userData.signup.uid){
      console.log('post message parsed name json: ' + userData.signup.uid);
    }
    if(userData.signup.email){
      console.log('post message parsed email json: ' + userData.signup.email);
    }
    if(userData.signup.name){
      console.log('post message parsed name json: ' + userData.signup.name);
    }
});
