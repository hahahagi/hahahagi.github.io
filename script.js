// 1. Inisialisasi Library AOS (Animate On Scroll)
AOS.init({
  duration: 800, // Durasi animasi (ms) - semakin besar semakin lambat
  once: true, // Animasi hanya terjadi sekali saat scroll ke bawah
  offset: 100, // Jarak sebelum elemen terlihat untuk memicu animasi
  easing: "ease-in-out-quad", // Gaya animasi agar smooth
});

// 2. Navbar Toggle (Opsional jika nanti mau nambah menu)
const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  alert("Menu diklik! (Nanti bisa tambahkan menu dropdown disini)");
});
