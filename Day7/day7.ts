import * as fs from 'fs';

const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const lines: string[] = content.split(/\r?\n/);

let result1: number = 0;
let result2: number = 0;

let beams: boolean[] = [];
for (let i=0; i<lines[0].length; i++) {if (lines[0][i] == 'S') {beams[i] = true;} else {beams[i] = false;}}

let paths: number[] = [];
for (let i=0; i<lines[0].length+1; i++) {if (lines[0][i] == 'S') {paths[i] = 1;} else {paths[i] = 0;}}


for (const line of lines) {
    for (let i=0; i<beams.length; i++) {
        if (beams[i] && line[i] == '^') {
            beams[i-1] = true;
            beams[i] = false;
            beams[i+1] = true;
            result1++;
            if (i==1) {paths[i-1] = paths[i];} else {paths[i-1] = paths[i]+paths[i-1];}
            paths[i+1] = paths[i]+paths[i+1];
            paths[i] = 0;
        }
    }
}

for (let i=0; i<paths.length; i++) {result2 += paths[i]}

console.log (`RESULT1: ${result1}`);
console.log (`RESULT2: ${result2}`);
