import * as fs from 'fs';

const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const lines: string[] = content.split(/\r?\n?,/);
let i, j, k: number;
let code1: number = 0;
let code2: number = 0;
let found:boolean = false;


for (const line of lines) {
    const ids:string[] = line.split(/-/);
    for (i = +ids[0]; i <= +ids[1]; i++) {
        if (i.toString().length % 2 == 0){
            let size:number = i.toString().length
            let part1:string = i.toString().substring(0,size/2);
            let part2:string = i.toString().substring(size/2, size);

            if (part1 == part2) {
                code1 += i;
            };
        }
    }
}

/**
 * Loop door regels
 * Per regel: loop door range ID's
 * Per ID: Check
 *      Loop door ID (teller1) 1 < teller < floor(lengte / 2)
 *          Alleen als lengte MOD teller1 == 0
 *          Pak eerste stuk van ID: start 0, lengte teller1)
 *          Check of deze gelijk is aan volgende blok(ken): start teller1 * teller2 + 1, lengte teller1 (teller2 > 1)
 *          Indien gelijk --> BINGO en ga verder met volgend ID
 *      
 */


for (const line of lines) {
    const ids:string[] = line.split(/-/);
    for (i = +ids[0]; i <= +ids[1]; i++) {
        // loop door range ID's
        let valid:boolean = false;
        let stringi:string = i.toString();
        for (j = 1; j <= Math.floor(stringi.length / 2); j++){
            // loop door ID
            if (stringi.length % j == 0){
                let part1:string = stringi.substring(0, j);
                for (k = 1; k < stringi.length / j; k++) {
                    valid = false;
                    let part2:string = stringi.substring(j * k, j * k + j);
                    if (part2 != part1){
                        valid = true;}
                    if (valid) {
                        break;
                    }
                }
                if (!valid) {
                    code2 += i;
                    break;
                }
            }
            if (!valid) {
                break;
            }
        }
    }
}

console.log ("CODE1: " + code1);
console.log ("CODE2: " + code2);
