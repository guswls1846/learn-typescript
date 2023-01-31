// api url
const url = "https://jsonplaceholder.typicode.com/users/1";

// dom
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let address = document.querySelector("#address");

// user data
let user = {};

/**
 * @typedef {Object} Address
 * @property {string} street
 * @property {string} suite
 * @property {string} city
 * @property {string} zipcode
 * */

/**
 * @typedef {Object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 * */

/**
 * @returns {Promise<User>}
 */
function getUser() {
  return axios.get(url);
}

getUser().then(function (response) {
  username.innerText = response.name;
  email.innerText = response.email;
  address.innerText = user.address.street;
});

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
