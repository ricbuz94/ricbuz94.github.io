import type {FirstCountData, SecondCountData} from "$lib/helpers/interfaces";

export function firstCount(data: FirstCountData): string {
    const Sex: number = data.sex ?? 0;
    const Age: number = data.age ?? 0;
    const Height: number = data.height ?? 0;
    const Weight: number = data.weight ?? 0;
    const AlcoholIndex: number = data.alcoholIndex ?? 0;

    let ageConst: number = 0;
    if (Age >= 16 && Age < 21) {
        ageConst = 1;
    } else if (Age >= 21 && Age < 30) {
        ageConst = 2;
    } else if (Age >= 30 && Age < 50) {
        ageConst = 1;
    } else if (Age >= 50) {
        ageConst = 0;
    }

    const tbw = Sex === 0
        ? 2.447 + ageConst + 0.1074 * Height + 0.3362 * Weight
        : 0.203 + ageConst / 1.36 + 0.1069 * Height + 0.2466 * Weight;
    const tasso = 0.8 / tbw;
    const alcoholMax = 0.5 / tasso;
    const alcool = alcoholMax * 0.75;
    const v = Math.round((alcool / (800 * (AlcoholIndex / 100))) * 100);

    return `${v}cl (${v * 10}ml)`;
}

export function secondCount(data: SecondCountData): string {

    const Sex: number = data.sex ?? 0;
    const Age: number = data.age ?? 0;
    const Height: number = data.height ?? 0;
    const Weight: number = data.weight ?? 0;
    const Licence: number = data.licence ?? 0;
    const Stomach: number = data.stomach ?? 0;

    let ageConst: number = 0;
    if (Age >= 16 && Age < 21) {
        ageConst = 0;
    } else if (Age >= 21 && Age < 30) {
        ageConst = 2;
    } else if (Age >= 30 && Age < 50) {
        ageConst = 1;
    } else if (Age >= 50) {
        ageConst = 0;
    }

    const vol = data?.drinks.reduce((acc, cur) => acc + (cur.grade * (cur.volume * 0.01)), 0);
    const base = vol * 8 - (Stomach === 1 ? 4 : 0);
    const factor = Sex === 0 ? 0.8 : 0.8 * 1.33;

    const index = Sex === 0
        ? base * factor / ((2.447 + ageConst + 0.1074 * Height + 0.3362 * Weight) * 0.8)
        : base * factor / (0.203 + ageConst / 1.36 + 0.1069 * Height + 0.2466 * Weight);

    const time = index > Licence ? (index - Licence) / 0.15 : 0;

    return minToTimeString(time);
}

function minToTimeString(minutes: number) {
    if (minutes < 1) return "Sei OK!";

    const totalSeconds = Math.floor(minutes * 60);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    const mm = m.toString().padStart(2, '0');
    const ss = s.toString().padStart(2, '0');

    return h > 0 ? `${h}h ${mm}m ${ss}` : `${mm}m ${ss}s`;
}