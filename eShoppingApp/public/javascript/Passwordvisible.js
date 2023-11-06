function togglePasswordVisibility() {
    var passwordInput = document.getElementById("actPwd");
    var showButton = document.getElementById("show-password-button");
    var hideButton = document.getElementById("hide-password-button");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showButton.style.display = "none";
        hideButton.style.display = "block";
    } else {
        passwordInput.type = "password";
        showButton.style.display = "block";
        hideButton.style.display = "none";
    }
}




