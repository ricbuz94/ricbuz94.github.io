
export function firstCount(): void {
    // @ts-ignore
    const sex: number = $("sesso")?.val() ?? 0;
    // @ts-ignore
    const age: number = $("anni")?.val() ?? 20;
    // @ts-ignore
    const height: number = $("h")?.val() ?? 170;
    // @ts-ignore
    const weight: number = $("peso")?.val() ?? 70;
    // @ts-ignore
    const alcoholIndex: number = $("grado")?.val() ?? 0;

    if (!sex || !age || !height || !weight || !alcoholIndex) {
        return alert({
            message: "Completare tutti i campi obbligatori.",
            closeButton: false,
            size: "small",
        });
    }

    let ageConst: number = 0;

    if (age >= 16 && age < 21) {
        ageConst = 1;
    } else if (age >= 21 && age < 30) {
        ageConst = 2;
    } else if (age >= 30 && age < 50) {
        ageConst = 1;
    } else if (age >= 50) {
        ageConst = 0;
    }

    let tbw, tasso, alcoolmax, alcool, v;
    if (sex == 0) {
        tbw = 2.447 + ageConst + 0.1074 * height + 0.3362 * weight;
        tasso = 0.8 / tbw;
        alcoolmax = 0.5 / tasso;
        alcool = alcoolmax * 0.75;
        v = alcool / (800 * (alcoholIndex / 100));
    } else {
        tasso = 0.8 / (0.203 + ageConst / 1.36 + 0.1069 * height + 0.2466 * weight);
        alcoolmax = 0.5 / tasso;
        alcool = alcoolmax * 0.75;
        v = alcool / (800 * (alcoholIndex / 100));
    }

    v = v * 100;

    // @ts-ignore
    const $res1 = $("#res1");
    if ($res1) {
        $res1.text("Posso bere " + v + "cl (" + v * 10 + "ml)");
        $res1.effect("bounce", {times: 3}, 500);
    }
}

export function secondCount(): void {
    const sesso = $("sesso").value;
    const anni = doyId("anni").value;
    const h = docum("h").value;
    const peso = doyId("peso").value;
    const patente =ntById("patente").value;
    const pasto = dById("pasto").value;
    const v1 = docud("v1").value;
    const v2 = docud("v2").value;
    const v3 = docud("v3").value;
    const grado1 = tById("grado1").value;
    const grado2 = tById("grado2").value;
    const grado3 = tById("grado3").value;

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
    $("#res2").effect("bounce", {times: 3}, 500);
}

function minTommss(minutes) {
    var sign = minutes < 0 ? "-" : "";
    var min = Math.floor(Math.abs(minutes));
    var sec = Math.floor((Math.abs(minutes) * 60) % 60);
    return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
}