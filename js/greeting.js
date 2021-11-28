const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const statusLogin = document.querySelector(".after_login");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
  }
  
function paintGreetings(username) {
    statusLogin.classList.add("on")
    greeting.innerHTML = `Make today your day!<br><span class="username">${username}</span>`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


function onLoginBtnClick() {
    const username = loginInput.value;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  
} else {
  paintGreetings(savedUsername);
}
