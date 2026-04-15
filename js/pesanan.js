const tbody = document.getElementById("tabel-pesanan");

db.pesanan.forEach((p, i) => {
    tbody.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${p.nama}</td>
            <td>${p.produk_id}</td>
            <td>${p.qty}</td>
            <td>Rp ${p.total.toLocaleString()}</td>
            <td>${p.tanggal}</td>
            <td>
                <span class="aksi edit">Edit</span> |
                <span class="aksi hapus">Hapus</span>
            </td>
        </tr>
    `;
});

function logout() {
    localStorage.removeItem("user");
    window.location.href = "../login.html";
}