// Fungsi Toggle Menu Navigasi
document.getElementById("hamburger").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("active");
});

// Daftar Harga dan Kategori
const dataHarga = [
    { kategori: "desaign", nama: "Desaign | Pamflet", harga: 10000 },
    { kategori: "desaign", nama: "Desaign | Feed Instagram", harga: 15000 },
    { kategori: "website", nama: "Website | Front-end", harga: 30000 },
    { kategori: "website", nama: "Website | Full-stack", harga: 70000 },
];

// Fungsi menampilkan daftar harga
function tampilkanHarga(kategori) {
    const container = document.getElementById("price-list");
    container.innerHTML = "";

    const filteredData = kategori === "all" ? dataHarga : dataHarga.filter(item => item.kategori === kategori);

    filteredData.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h2>${item.nama}</h2>
            <p>Harga: <strong>Rp ${item.harga.toLocaleString()}</strong></p>
            <a href="https://wa.me/6285189119169?text=Halo,%20saya%20ingin%20memesan%20${encodeURIComponent(item.nama)}%20seharga%20Rp${item.harga.toLocaleString()}" target="_blank" class="wa-button">
                WhatsApp
            </a>
        `;
        container.appendChild(card);
    });
}

// Event Listener untuk filter kategori
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        tampilkanHarga(button.dataset.category);
    });
});

// Menampilkan semua harga saat pertama kali dimuat
tampilkanHarga("all");
