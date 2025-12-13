import * as fs from 'fs';

const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const lines: string[] = content.split(/\r?\n/);
let magazijn: string[][] = [];
let result1: number = 0;
let result2: number = 0;
let done: number = 1;

// zet file in array[][]
for (let i=0; i<lines.length; i++) {
    magazijn[i] = lines[i].split('')
}

// PART 1
for (let i=0; i<magazijn.length; i++) {
    for (let j=0; j<magazijn[i].length; j++) {
        if (magazijn[i][j]=='@') {
            let count:number = 0;
            if (j>0)                                        {if (magazijn[i][j-1]=='@') {count++}} //check links
            if (j< magazijn[i].length-1)                    {if (magazijn[i][j+1]=='@') {count++}} //check rechts
            if (i>0)                                        {if (magazijn[i-1][j]=='@') {count++}} //check boven
            if (i<lines.length-1)                           {if (magazijn[i+1][j]=='@') {count++}} //check onder
            if (j>0 && i>0)                                 {if (magazijn[i-1][j-1]=='@') {count++}} // check links boven
            if (j>0 && i<lines.length-1)                    {if (magazijn[i+1][j-1]=='@') {count++}} //check links onder
            if (j<magazijn[i].length-1 && i>0)              {if (magazijn[i-1][j+1]=='@') {count++}} //check rechts boven
            if (j<magazijn[i].length-1 && i<lines.length-1) {if (magazijn[i+1][j+1]=='@') {count++}} //check rechts onder
            if (count < 4) {
                result1++;
            }
        }
    }
}

// PART 2
while (done > 0) {
    done = 0;

    for (let i=0; i<magazijn.length; i++) {
        for (let j=0; j<magazijn[i].length; j++) {
            if (magazijn[i][j]=='@') {
                let count:number = 0;
                if (j>0)                                        {if (magazijn[i][j-1]=='@') {count++}} //check links
                if (j< magazijn[i].length-1)                    {if (magazijn[i][j+1]=='@') {count++}} //check rechts
                if (i>0)                                        {if (magazijn[i-1][j]=='@') {count++}} //check boven
                if (i<lines.length-1)                           {if (magazijn[i+1][j]=='@') {count++}} //check onder
                if (j>0 && i>0)                                 {if (magazijn[i-1][j-1]=='@') {count++}} // check links boven
                if (j>0 && i<lines.length-1)                    {if (magazijn[i+1][j-1]=='@') {count++}} //check links onder
                if (j<magazijn[i].length-1 && i>0)              {if (magazijn[i-1][j+1]=='@') {count++}} //check rechts boven
                if (j<magazijn[i].length-1 && i<lines.length-1) {if (magazijn[i+1][j+1]=='@') {count++}} //check rechts onder
                if (count < 4) {
                    done++;
                    result2++;
                    magazijn[i][j] = 'X'
                }
            }
        }
    }
}

console.log (`RESULT1: ${result1}`);
console.log (`RESULT2: ${result2}`);