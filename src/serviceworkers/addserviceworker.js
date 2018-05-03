self.addEventListener('message', function(e) {
  console.log('received post message: ', e);

  if(e)
  {
    console.log('in e: ');
    const userData = JSON.parse(e.data);
    console.log('parsing the post data: ', userData);
      if(userData.signup.uid){
        console.log('post message parsed name json: ' + userData.signup.uid);
      }
      if(userData.signup.email)
      {
        console.log('post message parsed email json: ' + userData.signup.email);
      }
      if(userData.signup.name){
        console.log('post message parsed name json: ' + userData.signup.name);
      }
  }
});
