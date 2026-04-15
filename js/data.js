const db = {
    users: [
        { username: "frans", password: "123", nama: "frans" },
        { username: "anju", password: "123", nama: "anju" },
        { username: "admin", password: "123456", nama: "admin" }
    ],

    produk: [
        {
            nama: "Kuping Gajah",
            harga: 22000,
            stok: 50,
            gambar: "https://via.placeholder.com/60"
        },
        {
            nama: "Kuping Gajah Coklat",
            harga: 24000,
            stok: 50,
            gambar: "https://via.placeholder.com/60"
        },
        {
            nama: "Untir-Untir",
            harga: 22000,
            stok: 50,
            gambar: "https://via.placeholder.com/60"
        },
        {
            nama: "Untir-Untir Coklat",
            harga: 24000,
            stok: 50,
            gambar: "https://via.placeholder.com/60"
        }
    ],

    pesanan: [
        {
            nama: "Vina Oktaviani",
            produk_id: 9,
            qty: 6,
            total: 132000,
            tanggal: "2025-01-21"
        },
        {
            nama: "Ilham Ramadhan",
            produk_id: 8,
            qty: 8,
            total: 176000,
            tanggal: "2025-01-21"
        },
        {
            nama: "Yuni Astuti",
            produk_id: 7,
            qty: 7,
            total: 105000,
            tanggal: "2025-01-21"
        },
        {
            nama: "Farah Zahra",
            produk_id: 6,
            qty: 5,
            total: 125000,
            tanggal: "2025-01-21"
        }
    ]
};