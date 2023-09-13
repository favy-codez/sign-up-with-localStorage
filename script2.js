let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let users = {
    email: email,
    password: password
}

function addData(e) {
    e.preventDefault();
    localStorage.setItem('users', (JSON.stringify(users)))
        
}