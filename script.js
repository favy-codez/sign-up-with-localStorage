document.addEventListener("DOMContentLoaded", function () {
    let signUpForm = document.getElementById("sign-up-form");
    let loginForm = document.getElementById("log-in-form");


    signUpForm.addEventListener("submit", function(e){
        e.preventDefault();

        let userName = document.getElementById("userName").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        // Checking to see if email exists in localStorage
        if (localStorage.getItem(email)) {
            alert("email already exists. try another email");
        } else {
            // Store username, email and password in localStorage
            localStorage.setItem(email, password, userName);
            alert("Signup successful!!! login");
        }

        // Clear signup form
        signUpForm.reset();
    })

    // login Form
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        // check if email exists in local storage
        let correctUserName = localStorage.getItem(email);
        let correctPassword = localStorage.getItem(password);

        if(correctUserName === null){
            alert("email NOT FOUND!!!");
        }else if(correctPassword === null){
            alert("PASSWORD EMPTY");
        }else if(password === correctPassword){
            alert("Log in Sucessful!!!")
        }else{
            alert("Incorrect password. Please try again.");
        }
    })

    loginForm.reset();
}




// // Clear signup form
// signupForm.reset();
