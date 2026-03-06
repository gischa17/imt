function login(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(email !== "" && password !== ""){
window.location = "dashboard.html";
}else{
alert("Masukkan email dan password");
}

}

function hitungIMT(){

let tinggi = document.getElementById("tinggi").value;
let berat = document.getElementById("berat").value;

tinggi = tinggi/100;

let imt = berat/(tinggi*tinggi);

let kategori = "";

if(imt < 18.5){
kategori = "Berat badan kurang";
}
else if(imt < 25){
kategori = "Normal";
}
else if(imt < 30){
kategori = "Overweight";
}
else{
kategori = "Obesitas";
}

document.getElementById("hasil").innerHTML = "IMT: " + imt.toFixed(2);
document.getElementById("kategori").innerHTML = kategori;

simpanHistory(tinggi,berat,imt,kategori);

}

function simpanHistory(tinggi,berat,imt,kategori){

let data = {
tanggal: new Date().toLocaleDateString(),
tinggi: tinggi,
berat: berat,
imt: imt.toFixed(2),
kategori: kategori
}

let history = JSON.parse(localStorage.getItem("historyIMT")) || [];

history.push(data);

localStorage.setItem("historyIMT", JSON.stringify(history));

}

window.onload = function(){

let table = document.getElementById("historyTable");

if(table){

let history = JSON.parse(localStorage.getItem("historyIMT")) || [];

history.forEach(data => {

let row = table.insertRow();

row.insertCell(0).innerHTML = data.tanggal;
row.insertCell(1).innerHTML = data.tinggi;
row.insertCell(2).innerHTML = data.berat;
row.insertCell(3).innerHTML = data.imt;
row.insertCell(4).innerHTML = data.kategori;

});

}

}
