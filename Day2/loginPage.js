function validateLogin() {
  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();
  let error = document.getElementById("error");

  // Empty check
  if (user === "" || pass === "") {
    error.textContent = "All fields are required";
    return false;
  }

  // Dummy validation
  if (user === "admin" && pass === "1234") {
    window.location.href = "HomePage.html";
    return false;
  } else {
    error.textContent = "Invalid username or password";
    return false;
  }
}