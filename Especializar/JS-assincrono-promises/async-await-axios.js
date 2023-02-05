import axios from "axios";

async function fetchRepos() {
  try{
    const url = 'https://api.github.com/users/maykbrito'
    const user = await axios.get(url)
    const userRepos = await axios.get(user.data.repos_url)
    console.log(userRepos.data)
  } catch(error){
    console.log(error)
  }
}
fetchRepos()