// error messages
function showError(messageId, message) {
    const messageElement = document.getElementById(messageId);
    messageElement.textContent = message;
    messageElement.style.display = "block"; // show the message
}

function hideError(messageId) {
    const messageElement = document.getElementById(messageId);
    messageElement.textContent = "";
    messageElement.style.display = "none"; // hide the message
}

// ----------------------------------
// Email Validation
// ----------------------------------
function validateEmail(event) {
    const email = event.target.value; 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const errorMessageElement = document.getElementById("login_message");

    hideError("login_message"); // Clear previous messages

    if (!emailPattern.test(email)) {
        showError("login_message", "Please enter a valid email address.");
    } else {
        hideError("login_message");
    }
}

function validateFPEmail(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    hideError("email_message");

    // if email is valid
    if (!emailPattern.test(email)) {
        showError("email_message", "Please enter a valid email address.");
    } else {
        showError("email_message", "A link for password reset was sent to your email!");
        event.target.submit();
    }
}

// ----------------------------------
// Password Verification
// ----------------------------------
function verifyPassword() {
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;

    hideError("verify_message"); // clear previous error messages

    if (pass1 !== pass2) {
        showError("verify_message", "Passwords do not match.");
        return false;
    }if (pass1.length < 8) {
        showError("verify_message", "Password must be at least 8 characters long.");
        return false;
    }if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass1)) {
        showError("verify_message", "Password must contain at least one special character.");
        return false;
    }if (!/[0-9]/.test(pass1)) {
        showError("verify_message", "Password must contain at least one number.");
        return false;
    }
    hideError("verify_message");
    return true;
}

// ----------------------------------
// Check Password Strength
// ----------------------------------
function checkPasswordStrength() {
    const pass1 = document.getElementById("pass1").value;
    const passwordStrength = document.getElementById("password_strength");

    let strength = 0;
    if (pass1.length >= 8) strength++;
    if (/[A-Z]/.test(pass1)) strength++;
    if (/[0-9]/.test(pass1)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pass1)) strength++;

    // password strength feedback
    if (strength === 0 || strength === 1) {
        passwordStrength.textContent = "Weak";
        passwordStrength.style.color = "red";
    } else if (strength === 2) {
        passwordStrength.textContent = "Medium";
        passwordStrength.style.color = "orange";
    } else if (strength === 3 || strength === 4) {
        passwordStrength.textContent = "Strong";
        passwordStrength.style.color = "green";
    } else {
        passwordStrength.textContent = "";
    }
}


// ----------------------------------
// Toggle Password Visibility
// ----------------------------------
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId); 
    const currentInputType = passwordInput.getAttribute('type'); 
    let newInputType;

    if (currentInputType === 'password') {
        newInputType = 'text';
    } else {
        newInputType = 'password';
    }
    passwordInput.setAttribute('type', newInputType);
}


// ----------------------------------
// Login Validation
// ----------------------------------
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    hideError("login_message");

    if (username =="pogisishan@gmail.com" && password == "pogisishan123"){
        alert("Pogi si Shan")
    }
    return true;
}

// ----------------------------------
// On Form Submit
// ----------------------------------
function onFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
    const isValidEmail = validateEmail();
    const isValidPassword = verifyPassword();
    return isValidEmail && isValidPassword;
}