document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const password = document.getElementById("password").value;

  if (!firstName || !lastName || !password) {
    alert("Please fill in all fields.");
    return;
  }


  alert(
    Login attempt:\n\n +
    First Name: ${firstName}\n +
    Second Name: ${lastName}\n +
    Password: ${password}
  );
});