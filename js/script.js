const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const usernameThatUserWrote = loginInput.value;
  localStorage.setItem(USERNAME_KEY,usernameThatUserWrote);
  paintGreetings(usernameThatUserWrote)
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; // ${ } 의 결과는 문자열로 자동 변환됨.
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName===null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  paintGreetings(savedUserName)
}
