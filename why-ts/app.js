// api url
const url = "https://jsonplaceholder.typicode.com/users/1";

// dom
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let address = document.querySelector("#address");

// user data
let user = {};

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
