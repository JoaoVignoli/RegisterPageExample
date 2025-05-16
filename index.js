let users = []

function addUserInList(user) {
    const line          = document.createElement('tr');
    const nameColun     = document.createElement('td');
    const emailColun    = document.createElement('td');
    const passwordColun = document.createElement('td');

    nameColun.innerText     = user.name;
    emailColun.innerText    = user.email;
    passwordColun.innerText = user.password;

    line.appendChild(nameColun);
    line.appendChild(emailColun);
    line.appendChild(passwordColun);

    const userList = document.getElementById('user-list');
    userList.appendChild(line);
}

function readUsersData() {
    const storage = JSON.parse(localStorage.getItem("users"))
    userList      = storage ? storage : []

    for (let user of userList) {
        addUserInList(user)
    }
}

function registerUser() {
    const mensage       = document.getElementById("mensage");
    const nameInput     = document.getElementById("nameInput");
    const emailInput    = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");

    const name     = nameInput.value;
    const email    = emailInput.value;
    const password = passwordInput.value;

    const redColor     = "#e74c3c";
    const greenColor   = "#27ae60";

    if (!name) {
        mensage.innerText           = "Necessário informar um nome.";
        mensage.style.color         = redColor
        nameInput.style.borderColor = redColor
        return
    }

    if (!email) {
        mensage.innerText            = "Necessário informar um email.";
        mensage.style.color          = redColor
        emailInput.style.borderColor = redColor
        return
    }

    if (!password) {
        mensage.innerText               = "Necessário informar uma senha.";
        mensage.style.color             = redColor
        passwordInput.style.borderColor = redColor
        return
    }

    const userData = {
        'name':name, 
        'email': email, 
        'password': password
    };

    if (userData) {
        addUserInList(userData)
        users.push(userData)
        localStorage.setItem("users", JSON.stringify(users))

        mensage.innerText   = "Usuário cadastrado com sucesso!";
        mensage.style.color = greenColor
    }
}

function main() {
    const registerButton = document.getElementById("button");
    registerButton.addEventListener("click", registerUser);
    readUsersData()
}

window.addEventListener("load", main);