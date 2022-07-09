     const loginForm = document.querySelector("#login-form");
     const loginInput = document.querySelector("#login-form input");

qw
     function onLoginSubmit(info) {
          info.preventDefault();
          console.log(loginInput.value);
     }

     loginForm.addEventListener("submit", onLoginSubmit);
 
     
     

     

