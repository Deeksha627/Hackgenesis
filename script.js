// Redirect functions
function redirectToSignup() {
    window.location.href = "signup.html";
}

function redirectToLogin() {
    window.location.href = "login.html";
}

// Signup Validation Function
function validateSignup() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const errorMessage = document.getElementById("signup-error");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex pattern

    if (emailPattern.test(email) && password) {
        errorMessage.style.display = "none"; // Hide error message
        signup(email, password);
    } else {
        errorMessage.style.display = "block"; // Show error message
    }
}

// Login Validation Function
function validateLogin() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const errorMessage = document.getElementById("login-error");

    if (login(email, password)) {
        errorMessage.style.display = "none"; // Hide error message
    } else {
        errorMessage.style.display = "block"; // Show error message
    }
}

// Signup Function
function signup(email, password) {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Signup successful! Please log in.");
    window.location.href = "login.html";
}

// Login Function
function login(email, password) {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "index.html";
        return true;
    } else {
        return false;
    }
}
// Search Function
function search() {
    const searchQuery = document.getElementById("search-bar").value;
    if (searchQuery) {
        window.location.href = "map.html"; // Redirect to map page
    } else {
        alert("Please enter a search query.");
    }
}
