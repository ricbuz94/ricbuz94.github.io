// CALCOLO 1
function primoCalcolo() {
  var sesso = document.getElementById("sesso").value;
  var anni = document.getElementById("anni").value;
  var h = document.getElementById("h").value;
  var peso = document.getElementById("peso").value;
  var grado = document.getElementById("grado").value;

  if (!sesso || !anni || !h || !peso || !grado) {
    return alert({
      message: "Completare tutti i campi obbligatori.",
      closeButton: false,
      size: "small",
    });
  }

  if (anni >= 16 && anni < 21) {
    contributo_anni = 1;
  } else if (anni >= 21 && anni < 30) {
    contributo_anni = 2;
  } else if (anni >= 30 && anni < 50) {
    contributo_anni = 1;
  } else if (anni >= 50) {
    contributo_anni = 0;
  }

  var tbw, tasso, alcoolmax, alcool, v, contributo_anni;
  if (sesso == 0) {
    tbw = 2.447 + contributo_anni + 0.1074 * h + 0.3362 * peso;
    tasso = 0.8 / tbw;
    alcoolmax = 0.5 / tasso;
    alcool = alcoolmax * 0.75;
    v = alcool / (800 * (grado / 100));
  } else {
    tasso = 0.8 / (0.203 + contributo_anni / 1.36 + 0.1069 * h + 0.2466 * peso);
    alcoolmax = 0.5 / tasso;
    alcool = alcoolmax * 0.75;
    v = alcool / (800 * (grado / 100));
  }

  v = v * 100;
  r = parseInt(v);

  document.getElementById("res1").innerHTML =
    "Posso bere " + r + "cl (" + r * 10 + "ml)";
  $("#res1").effect("bounce", { times: 3 }, 500);
}

// CALCOLO 2
function secondoCalcolo() {
  var sesso = document.getElementById("sesso").value;
  var anni = document.getElementById("anni").value;
  var h = document.getElementById("h").value;
  var peso = document.getElementById("peso").value;
  var patente = document.getElementById("patente").value;
  var pasto = document.getElementById("pasto").value;
  var v1 = document.getElementById("v1").value;
  var v2 = document.getElementById("v2").value;
  var v3 = document.getElementById("v3").value;
  var grado1 = document.getElementById("grado1").value;
  var grado2 = document.getElementById("grado2").value;
  var grado3 = document.getElementById("grado3").value;

  if (!sesso || !anni || !h || !peso || !grado || !pasto || !v1 || !grado1 || !patente) {
    return alert({
      message: "Completare tutti i campi obbligatori.",
      closeButton: false,
      size: "small",
    });
  }

  if (!v2 && !grado2) {
    v2 = 0;
    grado2 = 0;
  }

  if (!v3 && !grado3) {
    v3 = 0;
    grado3 = 0;
  }

  v1 = v1 / 100;
  v2 = v2 / 100;
  v3 = v3 / 100;

  if (anni >= 16 && anni < 21) {
    contributo_anni = 0;
  } else if (anni >= 21 && anni < 30) {
    contributo_anni = 2;
  } else if (anni >= 30 && anni < 50) {
    contributo_anni = 1;
  } else if (anni >= 50) {
    contributo_anni = 0;
  }

  var tbw, tasso, contributo_anni;
  if (sesso == 0) {
    if (pasto == 0) {
      tbw = 2.447 + contributo_anni + 0.1074 * h + 0.3362 * peso;
      tasso =
        ((v1 * grado1 + v2 * grado2 + v3 * grado3) * 8 * 0.8) / (tbw * 0.8);
    } else if (pasto == 1) {
      tbw = 2.447 + contributo_anni + 0.1074 * h + 0.3362 * peso;
      tasso =
        (((v1 * grado1 + v2 * grado2 + v3 * grado3) * 8 - 4) * 0.8) /
        (tbw * 0.8);
    }
  } else {
    if (pasto == 0) {
      tasso =
        ((v1 * grado1 + v2 * grado2 + v3 * grado3) * 8 * 0.8 * 1.33) /
        (0.203 + contributo_anni / 1.36 + 0.1069 * h + 0.2466 * peso);
    } else if (pasto == 1) {
      tasso =
        (((v1 * grado1 + v2 * grado2 + v3 * grado3) * 8 - 4) * 0.8 * 1.33) /
        (0.203 + contributo_anni / 1.36 + 0.1069 * h + 0.2466 * peso);
    }
  }

  if (tasso > patente) {
    tempo = (tasso - patente) / 0.15;
  } else {
    tempo = 0;
  }

  document.getElementById("res2").innerHTML = "Attendere " + minTommss(tempo) + " (ore:min)";
  $("#res2").effect("bounce", { times: 3 }, 500);
}

function minTommss(minutes) {
  var sign = minutes < 0 ? "-" : "";
  var min = Math.floor(Math.abs(minutes));
  var sec = Math.floor((Math.abs(minutes) * 60) % 60);
  return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
}