let isAdmin = false;

if (isAdmin) {
  document.getElementById("content").innerHTML =
    "FLAG{CLIENT_SIDE_CHECK_BYPASS}";
} else {
  document.getElementById("content").innerText =
    "Accès refusé";
}
