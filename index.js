function pitati() {
  if (
    document.getElementById("sinan").value === "" ||
    document.getElementById("sinan").value === null
  ) {
    alert("Niste uneli pitanje! Pokušajte ponovo!");
  } else {
    alert("Uspešno ste postavili pitanje!");
  }
}
function odgNaStan() {
  var mali = document.getElementById("do20");
  var srednji = document.getElementById("od20do40");
  if (mali.checked) {
    document.getElementById("odgovor1").innerHTML = "";
    document.getElementById("odgovor1").innerHTML =
      "Za manje prostorije poput spavaće sobe ili kancelarije do 20 kvadratnih metara, preporučuje se prečišćivač vazduha snage od 100 do 200 kubičnih stopa po minutu (CFM).";
  } else if (srednji.checked) {
    document.getElementById("odgovor1").innerHTML = "";
    document.getElementById("odgovor1").innerHTML =
      "Za srednje prostorije poput dnevne sobe ili manjeg stana od 20 do 40 kvadratnih metara, preporučuje se prečišćivač vazduha snage od 200 do 300 CFM.";
  } else {
    document.getElementById("odgovor1").innerHTML = "";
    document.getElementById("odgovor1").innerHTML =
      "Za veće prostorije poput otvorenog dnevnog boravka, kuhinje i trpezarije veće od 40 kvadratnih metara, preporučuje se prečišćivač vazduha snage od 300 do 500 CFM ili više, u zavisnosti od specifičnih potreba.";
  }
}
function odgNaFilter() {
  var hepa = document.getElementById("hepaodg");
  var jon = document.getElementById("jonodg");
  var ugalj = document.getElementById("ugaljodg");
  var uv = document.getElementById("uvodg");
  if (hepa.checked) {
    document.getElementById("odgovor2").innerHTML = "";
    document.getElementById("odgovor2").innerHTML =
      "Za vas je prečišćivač vazduha sa HEPA filtriranjem.";
  } else if (jon.checked) {
    document.getElementById("odgovor2").innerHTML = "";
    document.getElementById("odgovor2").innerHTML =
      "Za vas je prečišćivač vazduha sa filitriranjem UV svetslošću.";
  } else if (ugalj.checked) {
    document.getElementById("odgovor2").innerHTML = "";
    document.getElementById("odgovor2").innerHTML =
      "Za vas je prečišćivač vazduha sa karbonskim filtriranjem.";
  } else {
    document.getElementById("odgovor2").innerHTML = "";
    document.getElementById("odgovor2").innerHTML =
      "Za vas je prečišćivač vazduha sa jonskim filtriranjem.";
  }
}
function uvecanaSlika(ImgLink) {
  document.getElementById("FullImage").src = ImgLink;
  document.getElementById("FullImageView").style.display = "block";
}
function smanjiSliku() {
  document.getElementById("FullImageView").style.display = "none";
}
