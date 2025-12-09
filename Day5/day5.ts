import * as fs from 'fs';

const filePath_givenRange: string = 'input_range.txt';
const filePath_check: string = 'input_check.txt';
const strRange: string = fs.readFileSync(filePath_givenRange, 'utf-8');
const strCheck: string = fs.readFileSync(filePath_check, 'utf-8');
const arrRange: string[] = strRange.split(/\r?\n/);
const arrCheck: string[] = strCheck.split(/\r?\n/);

class Range {
    waarde: number;
    functie: string;
    constructor(waarde: number, functie: string) {
        this.waarde = waarde;
        this.functie = functie;
    }
};

let givenRange: string[][] = [];
let result1:number = 0;
let result2:number = 0;
let teller:number = 0;
let waardeStart: number = 0

// zet range in array[][]
for (let i=0; i<arrRange.length; i++) {
    givenRange[i] = arrRange[i].split('-');
}

// PART 1
for (const check of arrCheck) {
    for (let j=0; j<givenRange.length; j++) {
        if (+check >= +givenRange[j][0] && +check <= +givenRange[j][1]) {
            result1++;
            break;
        }
    }
}

console.log (`CODE1: ${result1}`);


// PART 2
let arrayRange: Range[] = [];
for (const given of givenRange){
    arrayRange.push(new Range(+given[0], "start"));
    arrayRange.push(new Range(+given[1], "eind"));
}

function compare(a: Range, b: Range) {
    if(a.waarde == b.waarde)
        return b.functie.charCodeAt(0) - a.functie.charCodeAt(0);
    return a.waarde - b.waarde;
}

arrayRange.sort(compare);

// console.log(JSON.stringify(arrayRange));

for (let k=0; k<arrayRange.length; k++) {
    if (teller == 0) {waardeStart = arrayRange[k].waarde};
    if (arrayRange[k].functie == "start") {teller++};
    if (arrayRange[k].functie == "eind") {teller--};
    if (teller == 0) {result2 += (arrayRange[k].waarde - waardeStart) + 1};
}

console.log (`CODE2: ${result2}`);
