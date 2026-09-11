document.getElementById("checkoutForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop default browser behavior

  let isValid = true;

  // Full Name Validation (letters + spaces only)
  const name = document.getElementById("name").value.trim();
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    document.getElementById("nameError").innerText = "❌ Name must contain only letters and spaces.";
    isValid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  // Username Validation (alphanumeric only)
  const username = document.getElementById("username").value.trim();
  const usernameRegex = /^[A-Za-z0-9]+$/;
  if (!usernameRegex.test(username)) {
    document.getElementById("usernameError").innerText = "❌ Username must be alphanumeric only.";
    isValid = false;
  } else {
    document.getElementById("usernameError").innerText = "";
  }

  // Email Validation (basic structure check)
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText = "❌ Invalid email format.";
    isValid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  // If all validations pass
  if (isValid) {
    alert("✅ Registration successful!");
  }
});
