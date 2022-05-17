"use strict";

var pirmaKomanda = document.getElementsByTagName("button")[0];
var antraKomanda = document.getElementsByTagName("button")[1];
var max = document.getElementsByTagName("input")[0];
var maxScore = document.getElementById("score");
var reset = document.getElementsByTagName("button")[2];
var displayNumber = document.getElementById("displayNumber");
var displayNumber1 = document.getElementById("displayNumber1");
var value_1 = 0;
var value_2 = 0;

// taskai
pirmaKomanda.addEventListener("click", function () {
  value_1++;
  displayNumber.innerText = value_1;
  if (value_1 == Number(maxScore.innerText)) {
    displayNumber.classList.add("winner");
    pirmaKomanda.disabled = true;
    antraKomanda.disabled = true;
  }
});
antraKomanda.addEventListener("click", function () {
  value_2++;
  displayNumber1.innerText = value_2;
  if (value_2 == Number(maxScore.innerText)) {
    displayNumber1.classList.add("winner");
    pirmaKomanda.disabled = true;
    antraKomanda.disabled = true;
  }
});

//max score
max.addEventListener("click", function () {
  if (value_1 == 0 && value_2 == 0) {
    maxScore.innerText = max.value;
    pirmaKomanda.disabled = false;
    antraKomanda.disabled = false;
    if (max.value == "") {
      maxScore.innerText = "enter a maximum score";
      pirmaKomanda.disabled = true;
      antraKomanda.disabled = true;
    }
    if (max.value < 1 && max.value != "") {
      alert("iveskite teigiama max score first!");
      pirmaKomanda.disabled = true;
      antraKomanda.disabled = true;
    }
  } else {
    alert(
      "Zaidimo metu maksimalaus score negalima keisti, jei norite pakeisti pirma paspauskite reset"
    );
  }
});
max.addEventListener("keyup", function () {
  if (value_1 == 0 && value_2 == 0) {
    maxScore.innerText = max.value;
    pirmaKomanda.disabled = false;
    antraKomanda.disabled = false;
    if (max.value == "") {
      maxScore.innerText = "enter a maximum score";
      pirmaKomanda.disabled = true;
      antraKomanda.disabled = true;
    }
    if (max.value < 1 && max.value != "") {
      alert("iveskite teigiama max score first!");
      pirmaKomanda.disabled = true;
      antraKomanda.disabled = true;
    }
  } else {
    alert(
      "Zaidimo metu maksimalaus score negalima keisti, jei norite pakeisti pirma paspauskite reset"
    );
  }
});

// reset
reset.addEventListener("click", function () {
  value_1 = 0;
  value_2 = 0;
  displayNumber.innerText = value_1;
  displayNumber1.innerText = value_2;
  pirmaKomanda.disabled = false;
  antraKomanda.disabled = false;
  displayNumber.classList.remove("winner");
  displayNumber1.classList.remove("winner");
  max.value = 5;
  maxScore.innerText = max.value;
});
