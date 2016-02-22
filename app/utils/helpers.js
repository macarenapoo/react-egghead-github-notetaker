import axios from 'axios';

function getRepos(username){
  return axios.get(`https://api.github.com/users/${username}/repos`);
};

function getUserInfo(username){
  return axios.get(`https://api.github.com/users/${username}`);
};


//With axios we can use .all to wait for both promises to be done and then attach a callback with .then


export default function getGithubInfo(username){
    return axios.all([getRepos(username), getUserInfo(username)])
      .then((arr) => ({repos: arr[0].data, bio: arr[1].data }))
  }
