import * as fs from 'fs';

const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const lines: string[] = content.split(/\r?\n/);

class Assignement {
    term1: number;
    term2: number;
    term3: number;
    term4: number;
    operator: string;

    public constructor (a:number, b:number, c:number, d:number, op:string) {
        this.term1 = a;
        this.term2 = b;
        this.term3 = c;
        this.term4 = d;
        this.operator = op;
    }

    public getSolution(): number {
        if (this.operator == '+') {return this.term1 + this.term2 + this.term3 + this.term4};
        if (this.operator == '*') {return this.term1 * this.term2 * this.term3 * this.term4};
        return 0;
    }
}

let result1: number = 0;
let result2: number = 0;
let arrInput: string[][] = [];
let arrAssignment1: Assignement[] = [];
let arrAssignment2: Assignement[] = [];

// zet input in array[][]
for (let i=0; i<lines.length; i++) {
    arrInput[i] = lines[i].split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
}

// PART 1
// Vul array met assignments
for (let i=0; i<arrInput[0].length; i++){
    arrAssignment1.push(new Assignement(+arrInput[0][i], +arrInput[1][i], +arrInput[2][i], +arrInput[3][i], arrInput[4][i]));
}

// Voer assignments uit
for (let i=0; i<arrAssignment1.length; i++){
    result1 += arrAssignment1[i].getSolution();
}

console.log (`RESULT1: ${result1}`);

// PART2
// Vul array met assignments
for (let i=0; i<lines[0].length; i++){
    let op: string = lines[4][i];
    let a: number = Number(lines[0][i] + lines[1][i] + lines[2][i] + lines[3][i]);
    i++
    let b: number = Number(lines[0][i] + lines[1][i] + lines[2][i] + lines[3][i]);
    i++
    let c: number = 0;
    let d: number = 0;
    if (lines[0][i]!=' ' || lines[1][i]!=' ' || lines[2][i]!=' ' || lines[3][i]!=' ') {
        c = Number(lines[0][i] + lines[1][i] + lines[2][i] + lines[3][i]);
        i++
    } else {
        if (op == '+') {c = 0; d = 0;}
        if (op == '*') {c = 1; d = 1;}
    }
    if (lines[0][i]!=' ' || lines[1][i]!=' ' || lines[2][i]!=' ' || lines[3][i]!=' ') {
        d = Number(lines[0][i] + lines[1][i] + lines[2][i] + lines[3][i]);
        i++
    } else {
        if (op == '+') {d = 0;}
        if (op == '*') {d = 1;}
    }
    arrAssignment2.push(new Assignement(a, b, c, d, op));
}
console.log (arrAssignment2[998]);

// Voer assignments uit
for (let i=0; i<arrAssignment2.length; i++){
    result2 += arrAssignment2[i].getSolution();
}

console.log (`RESULT2: ${result2}`);
