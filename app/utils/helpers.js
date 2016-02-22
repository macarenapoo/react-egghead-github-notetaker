var axios = require('axios');

function getRepos(username){
  return axios.get('https://api.github.com/users/' + username + '/repos');
};

function getUserInfo(username){
  return axios.get('https://api.github.com/users/' + username);
};


//With axios we can use .all to wait for both promises to be done and then attach a callback with .then

var helpers = {
  getGithubInfo: function(username){
    return axios.all([getRepos(username), getUserInfo(username)])
      .then(function(arr){
        return {
          repos: arr[0].data,
          bio: arr[1].data
        }
      });
  }
};

module.exports = helpers;
