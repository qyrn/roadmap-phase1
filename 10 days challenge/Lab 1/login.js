function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "supersecret") {
    window.location.href = "admin.html";
  } else {
    document.getElementById("error").innerText = "Accès refusé";
  }
}
