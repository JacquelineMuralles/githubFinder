// instantiate github class from github.js
const github = new GitHub;

//Search input 
const searchUser = document.getElementById('searchUser');

// Search input event listener for keyup
searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;
  //Making sure it's not left blank
  if(userText !== ''){
    //Make http call
    github.getUser(userText)
    .then(data => { 
      if(data.profile.message === 'Not Found') {
        //Show alert
      
      } else {
        //Show profile
      }
      console.log(data);
    })
  } else {
    //Clear profile
    }
});