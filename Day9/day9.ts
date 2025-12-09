import * as fs from 'fs';


const filePath: string = 'inputa.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const lines: string[] = content.split(/\r?\n/);

let arrInput: string[][] = [];
let arrInputNum: number[][] = [];
let result1:number = 0;
let result2:number = 0;

// zet input in array[][]
for (let i=0; i<lines.length; i++) {arrInput[i] = lines[i].split(',');}
for (let i=0; i<arrInput.length; i++) {arrInputNum[i] = [+arrInput[i][0], +arrInput[i][1]];}

// PART 1
for (let i=0; i<arrInputNum.length; i++) {
    for (let j=0; j<arrInputNum.length; j++) {
        let area = Math.abs((arrInputNum[i][0] - arrInputNum[j][0]+1) * (arrInputNum[i][1] - arrInputNum[j][1]+1));
        if (result1 < area) {result1 = area};
    }
}

// // PART 2
// let xLow, xHigh: number;
// let yLow, yHigh: number;
// for (let i=0; i<arrInputNum.length; i++) {
//     for (let j=0; j<arrInputNum.length; j++) {
//         if (arrInputNum[i][0] < arrInputNum[j][0])  {
//             xLow = arrInputNum[i][0];
//             xHigh = arrInputNum[j][0];
//         } else {
//             xLow = arrInputNum[j][0];
//             xHigh = arrInputNum[i][0];           
//         }
//         if (arrInputNum[i][1] < arrInputNum[j][1])  {
//             yLow = arrInputNum[i][1];
//             yHigh = arrInputNum[j][1];
//         } else {
//             yLow = arrInputNum[j][1];
//             yHigh = arrInputNum[i][1];           
//         }
//         for (let k=0; k<arrInputNum.length; k++) {
//             let xCheck: number = arrInputNum[k][0];
//             let yCheck: number = arrInputNum[k][1];
//             if (!(xCheck>xLow && xCheck<xHigh && yCheck>yLow && yCheck<yHigh)) {
//                 let area = Math.abs((arrInputNum[i][0] - arrInputNum[j][0]+1) * (arrInputNum[i][1] - arrInputNum[j][1]+1));
//                 if (result2 < area) {result2 = area}; 
//             }
//         }
        
//     }
// }


console.log (`RESULT1: ${result1}`);
// console.log (`RESULT2: ${result2}`);