let userName = document.getElementById("userName");
let email = document.getElementById("email");
        let password = document.getElementById("password");

        let users = {
            userName: userName,
            email: email,
            password: password
        }

function addData(e) {
    
        

        

        e.preventDefault();
       localStorage.getItem(('users', JSON.stringify(users)))
        
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
