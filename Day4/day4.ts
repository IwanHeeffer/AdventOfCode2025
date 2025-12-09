import * as fs from 'fs';

const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const lines: string[] = content.split(/\r?\n/);
let magazijn: string[][] = [];
let result1: number = 1;
let result2: number = 0;

// zet file in array[][]
for (let i=0; i<lines.length; i++) {
    // for (let j=0; j<lines[i].length; j++) {
    //     magazijn[i][j] = lines[i][j];
    magazijn[i] = lines[i].split('')
}
while (result1 > 0) {
    result1 = 0;

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
                    result2++;
                    magazijn[i][j] = 'X'
                }
            }
        }
    }
}

console.log (`CODE1: ${result2}`);