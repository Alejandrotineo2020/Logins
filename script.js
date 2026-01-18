const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const flipCard = document.getElementById("flipCard");

const registerText = document.getElementById("registerText");
const loginText = document.getElementById("loginText");

registerText.addEventListener("click", () => {
    flipCard.classList.add("flipped");
});

loginText.addEventListener("click", () => {
    flipCard.classList.remove("flipped");
});

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userFound = users.find(user => user.username === username && user.password === password);

    if (userFound) {
        localStorage.setItem("usuarioActivo", JSON.stringify(userFound));
        window.location.href = "bienvenida.html";
    } else {
        alert("Usuario no registrado. Por favor regístrate.");
        flipCard.classList.add("flipped");
    }
    }
);

registerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("registerName").value;
    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some(user => user.username === username);

    if (exists) {
        alert("Ese usuario ya existe");
        return;
    }

    users.push({ name, username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro exitoso. Ahora inicia sesión.");
    flipCard.classList.remove("flipped");
    registerForm.reset();
});
