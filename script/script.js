//Mencari tombol dengan id "btn-tema" dan menyimpannya dalam variabel tombolTema
const tombolTema = document.getElementById("btn-tema");
//Mendefinisikan fungsi gantiTema yang akan menambahkan atau 
//menghapus kelas "dark-mode" pada elemen body
function gantiTema() {
    document.body.classList.toggle("dark-mode");
}
//Menambahkan event listener pada tombolTema yang akan memanggil fungsi gantiTema saat tombol diklik
if (tombolTema) {
    tombolTema.addEventListener("click", gantiTema);
}
//Mendefinisikan array dataPortofolio yang berisi objek-objek portofolio
const dataPortofolio = [
    {
        judul: "Membuat Website Portofolio",
        deskripsi: "Membuat website portofolio menggunakan HTML, CSS, dan JavaScript."
    },
    {
        judul: "Praktikum DOM JS",
        deskripsi: "Membuat website portofolio menggunakan DOM JS."
    }
];
//Mencari elemen dengan class "daftar-portofolio" dan menyimpannya dalam variabel daftarPortofolio
const daftarPortofolio = document.querySelector(".daftar-portofolio");
//Mencari tombol dengan id "btn-tambah" dan menyimpannya dalam variabel tombolTambah
const tombolTambah = document.getElementById("btn-tambah");
//Mendefinisikan fungsi renderItem yang akan membuat elemen artikel untuk setiap item portofolio
function renderItem(data) {
    const artikel = document.createElement("article");
    const judul = document.createElement("h3"); 
    judul.textContent = data.judul;
    const deskripsi = document.createElement("p");
    deskripsi.textContent = data.deskripsi;
    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";
    artikel.appendChild(judul);
    artikel.appendChild(deskripsi);
    artikel.appendChild(tombolHapus);
    
    daftarPortofolio.appendChild(artikel);
}
//Jika elemen daftarPortofolio ada, maka setiap item dalam dataPortofolio akan dirender menggunakan fungsi renderItem 
if (daftarPortofolio) {
    dataPortofolio.forEach(renderItem);
}
//Jika tombolTambah ada, maka akan ditambahkan event listener yang akan menambahkan item baru ke daftar portofolio saat tombol diklik.  
if (tombolTambah) {
    tombolTambah.addEventListener("click", () => {
    const inputJudul = document.getElementById("input-judul");
    const inputDeskripsi = document.getElementById("input-deskripsi");
    //Jika input judul atau deskripsi kosong, maka akan menampilkan alert dan menghentikan eksekusi fungsi.
    if (inputJudul.value.trim() === "" || inputDeskripsi.value.trim() === "") {
        alert("Judul dan deskripsi harus diisi!");
        return;
    }
    const itemBaru = {
      judul: inputJudul.value,
      deskripsi: inputDeskripsi.value
    };
    //Menambahkan item baru ke array dataPortofolio
    dataPortofolio.push(itemBaru);
    renderItem(itemBaru);
    inputJudul.value = "";
    inputDeskripsi.value = "";
  });
}
//Jika elemen daftarPortofolio ada, maka akan 
//ditambahkan event listener yang akan menghapus item portofolio saat tombol hapus diklik.
if (daftarPortofolio) {
  daftarPortofolio.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.closest("article").remove();
    }
  });
}
