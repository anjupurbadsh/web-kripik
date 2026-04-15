const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    window.location.href = "login.html";
}

// tampilkan nama
document.getElementById("nama").innerText = user.nama;

// data
document.getElementById("produk").innerText = db.produk.length + " produk";
document.getElementById("pesanan").innerText = db.pesanan.length + " pesanan";
document.getElementById("user").innerText = db.users.length + " user";

// logout
function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}