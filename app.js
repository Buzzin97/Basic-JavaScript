 const longinInput = document.querySelector("#login-form input");
 const longinButton = document.querySelector("#login-form button");

 function onLoginBtnClick() {
    const username = longinInput.value;
    if(username === ""){
     alert("Please write your name");
    } else if(username.length > 15) {
     alert("Your name is too long.");
    }
}

 longinButton.addEventListener("click" , onLoginBtnClick);