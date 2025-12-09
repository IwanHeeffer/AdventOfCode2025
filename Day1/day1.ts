import * as fs from 'fs';

const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const lines: string[] = content.split(/\r?\n/);
let dial:number = 50;
let codeA:number = 0;
let codeB:number = 0;

function goLeft (start: number, amount: number): number {
    if (start === 0) {start = 100}
    start -= amount;
    while (start < 0){
        start += 100;
        codeB++;
    }
    return start;
}
function goRight (start: number, amount: number): number {
    start += amount;
        while (start > 99){
        start -= 100;
        codeB++;
    }
    return start;
}

for (const line of lines) {
    if (line[0] === "L") {
        let amountL = line.replace("L", "");
        dial = goLeft(dial, +amountL);
        if (dial === 0) {codeB++};
    }
        if (line[0] === "R") {
        let amountR = line.replace("R", "");
        dial = goRight(dial, +amountR);
    }
    if (dial === 0) {codeA++}

}

console.log ("CODEA: " + codeA);
console.log ("CODEB: " + codeB);