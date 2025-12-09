import * as fs from 'fs';


const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const lines: string[] = content.split(/\r?\n/);

let arrInput: string[][] = [];
let arrInputNum: number[][] = [];
let result1:number = 0;

// zet input in array[][]
for (let i=0; i<lines.length; i++) {arrInput[i] = lines[i].split(',');}
for (let i=0; i<arrInput.length; i++) {arrInputNum[i] = [+arrInput[i][0], +arrInput[i][1]];}

for (let i=0; i<arrInputNum.length; i++) {
    for (let j=1; j<arrInputNum.length; j++) {
        let area = Math.abs((arrInputNum[i][0] - arrInputNum[j][0]+1) * (arrInputNum[i][1] - arrInputNum[j][1]+1));
        if (result1 < area) {result1 = area};
    }
}

console.log (`RESULT1: ${result1}`);