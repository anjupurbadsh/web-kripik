const tbody = document.getElementById("tabel-user");

db.users.forEach((u, i) => {
    tbody.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${u.username}</td>
            <td>Admin</td>
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