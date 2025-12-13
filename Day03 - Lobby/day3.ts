function HighestNumber (input: string):number[] {
    // console.log(input)
    let highest:number = 0;
    let result:number[] = [0, 0];
    // first number
    for (let i=0; i < input.length; i++){
        // console.log (`input: ${line} - index: ${i} (${line[i]})`)
        if (+input[i] > highest) {
            highest = +input[i];
            result = [highest, i];
        }
        // console.log (`input: ${line} - index: ${index} - highest: ${highest}`)
        if (highest == 9) {break;}
    }
    // console.log (result)
    return result

}

import * as fs from 'fs';

const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const lines: string[] = content.split(/\r?\n/);
let code:string = "";
let result1:number = 0;
let result2:number = 0;
let num1:number[];
let num2:number[];
let num3:number[];
let num4:number[];
let num5:number[];
let num6:number[];
let num7:number[];
let num8:number[];
let num9:number[];
let num10:number[];
let num11:number[];
let num12:number[];

// PART 1
for (const line of lines) {
    let code:string = "";
    let highest:number = 0;
    let index:number = 0;
    // first number
    for (let i=0; i < line.length-1; i++){
        // console.log (`input: ${line} - index: ${i} (${line[i]})`)
        if (+line[i] > highest) {
            highest = +line[i];
            index = i;
        }
        if (highest == 9) {break;}
    }
    code = highest.toString();
    // second number
    highest = 0;
    for (let i=index+1; i <= line.length; i++){
        if (+line[i] > highest) {highest = +line[i];}
        if (highest == 9) {break;}
    }
    code = code + highest.toString();
    result1 += +code;
}

// PART 2
for (const line of lines) {
    let index:number = 0
    num1 = HighestNumber(line.substring(index, line.length-11))  
    index += num1[1]+1;
    num2 = HighestNumber(line.substring(index, line.length-10))    
    index += num2[1]+1;  
    num3 = HighestNumber(line.substring(index, line.length-9))    
    index += num3[1]+1;  
    num4 = HighestNumber(line.substring(index, line.length-8))    
    index += num4[1]+1;  
    num5 = HighestNumber(line.substring(index, line.length-7))    
    index += num5[1]+ 1;  
    num6 = HighestNumber(line.substring(index, line.length-6))    
    index += num6[1]+1;  
    num7 = HighestNumber(line.substring(index, line.length-5))    
    index += num7[1]+1;  
    num8 = HighestNumber(line.substring(index, line.length-4))    
    index += num8[1]+1;  
    num9 = HighestNumber(line.substring(index, line.length-3))    
    index += num9[1]+1;  
    num10 = HighestNumber(line.substring(index, line.length-2))    
    index += num10[1]+1;  
    num11 = HighestNumber(line.substring(index, line.length-1))    
    index += num11[1]+1;  
    num12 = HighestNumber(line.substring(index, line.length))

    code = num1[0].toString() + num2[0].toString() + num3[0].toString() + num4[0].toString() + num5[0].toString() + num6[0].toString() + num7[0].toString() + num8[0].toString() + num9[0].toString() + num10[0].toString() + num11[0].toString() + num12[0].toString();
    // console.log (line + ':' + code);
    result2 += +code;
}


console.log (`RESULT1: ${result1}`);
console.log (`RESULT2: ${result2}`);
