const tbody = document.getElementById("tabel-produk");

db.produk.forEach((p, i) => {
    tbody.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${p.nama}</td>
            <td>Rp. ${p.harga.toLocaleString()}</td>
            <td>${p.stok}</td>
            <td><img src="${p.gambar}" width="50"></td>
            <td>
                <span class="aksi edit">Edit</span> |
                <span class="aksi hapus">Hapus</span>
            </td>
        </tr>
    `;
});

// navigasi
function go(url) {
    window.location.href = "../" + url;
}

function logout() {
    localStorage.removeItem("user");
    window.location.href = "../login.html";
}