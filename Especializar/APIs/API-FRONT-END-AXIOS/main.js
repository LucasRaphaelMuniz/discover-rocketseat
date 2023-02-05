const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
  .then(response => {
    apiResult.textContent = JSON.stringify(response.data)
  })
  .catch(error => console.error(error.data))
}

function addNewUser(){
  axios.post(url, newUser)
  .then(response => {
    console.log(response)
  })
  .catch(error => console.error(error))
}

function getUser(id){
  axios.get(`${url}/${id}`)
  .then(response =>{
    userName.textContent = response.data.name
    userCity.textContent = response.data.city
    userID.textContent = response.data.id
    userAvatar.src = response.data.avatar
  })
  .catch(error => console.error(error))
}

function updateUser(id, userUpdated){
  axios.put(`${url}/${id}`, userUpdated)
  .then(response => console.log(response))
  .catch(error => console.error(error))
}

function deleteUser(id){
  axios.delete(`${url}/${id}`)
  .then(response => console.log(response))
  .catch(error => console.error(error))
}

const userUpdated = {
  name: "Lucas Raphael Muniz Ferreira",
  avatar: "https://picsum.photos/200/300",
  city: "Maringá-PR"
}

const newUser = {
  name: "Lucas Muniz",
  avatar: "https://picsum.photos/200/300",
  city: "Maringá"
}

//deleteUser(3)
//addNewUser()
//updateUser(4, userUpdated)
getUsers()
getUser(4)