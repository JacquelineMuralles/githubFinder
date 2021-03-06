//es6 class
class GitHub{
  constructor(){
    this.client_id = 'c0b6c3cc6dfc5b28febc';
    this.client_secret = 'dd31ccc83e67e96a1916a62fdb957e0d5a865702';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    //getting user profile using the (user) that is searched and our client id and secret id

    //Fetching user from API
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    //Fetching repos from API
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    //Getting user profile information in JS object notation (JSON)
    const profile = await profileResponse.json();

    //Getting repos in JS Object notation (JSON)
    const repos = await repoResponse.json();

    return {
      //in es6 same as doing profile: profile 
      profile,
      repos
    }
  }
}