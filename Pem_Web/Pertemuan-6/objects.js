var Mahasiswa = [{
    nama: "buddi",
    umur: 20,
    jurusan: "Informatika"},
{nama: "Andi",
umur: 21,
jurusan: "Sistem Informasi"}
];
console.log(Mahasiswa[1].nama);

// menampilkan seluruh object
for (var i = 0; i < Mahasiswa.length; i++) {
    console.log("Nama: " + Mahasiswa[i].nama);
    console.log("Umur: " + Mahasiswa[i].umur);
    console.log("Jurusan: " + Mahasiswa[i].jurusan);
    console.log("-------------------");
}

delete Mahasiswa[0].umur; // menghapus properti umur dari object pertama
for (var i = 0; i < Mahasiswa.length; i++) {
    console.log("Nama: " + Mahasiswa[i].nama);
    console.log("Umur: " + Mahasiswa[i].umur);
    console.log("Jurusan: " + Mahasiswa[i].jurusan);
    console.log("-------------------");
}