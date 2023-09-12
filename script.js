let userName = document.getElementById("userName").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let users = {
    userName: userName,
    email: email,
    password: password
}

function addData(e) {
    e.preventDefault();
    localStorage.setItem('users', (JSON.stringify(users)))
        
}


 // Check if username already exists in localStorage
//  if (localStorage.getItem(user_Name)) {
//     alert("Username already exists. Please choose a different one.");
// } else {
//     // Store username and password in localStorage
//     localStorage.setItem(user_Name, password);
//     alert("Signup successful! You can now login.");
// }

// // Clear signup form
// signupForm.reset();
