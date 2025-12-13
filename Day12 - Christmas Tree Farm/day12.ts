import * as fs from 'fs';

class Gift {
    id: number;
    form: string[]

    constructor (id: number, form: string[]) {
        this.id = id;
        this.form = form;
    }

    Size ():number {
        let count: number = 0;
        for (let i=0; i<this.form.length; i++) {
            for (let j=0; j<this.form[i].length; j++) {
                if (this.form[i][j] == '#') count++
            }
        }
        return count;
    }

}

class Shape {
    id: number;
    sizeX: number;
    sizeY: number;
    gifts: number[];

    constructor (id: number, sizeX: number, sizeY: number, gifts: number[]) {
        this.id = id;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.gifts = gifts;
    }

    NumOfSquares (): number {
        return Math.floor(this.sizeX / 3) * Math.floor(this.sizeY / 3)
    }

    NumOfGifts (): number {
        return this.gifts[0]+this.gifts[1]+this.gifts[2]+this.gifts[3]+this.gifts[4]+this.gifts[5];
    }
}

const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const lines: string[] = content.split(/\r?\n/);

let result1: number = 0;

// zet input in array of shapes
let arrShapes: Shape[] = [];
for (let i=0; i<lines.length; i++) {
    let sizeX: string = lines[i][0]+lines[i][1];
    let sizeY: string = lines[i][3]+lines[i][4];
    let gift0: string = lines[i][7]+lines[i][8];
    let gift1: string = lines[i][10]+lines[i][11];
    let gift2: string = lines[i][13]+lines[i][14];
    let gift3: string = lines[i][16]+lines[i][17];
    let gift4: string = lines[i][19]+lines[i][20];
    let gift5: string = lines[i][22]+lines[i][21];
    arrShapes.push(new Shape(i, +sizeX, +sizeY, [+gift0, +gift1, +gift2, +gift3, +gift4, +gift5]))
}

// console.log (arrShapes[0] + '-' + arrShapes[0].NumOfSquares() + '-' + arrShapes[0].NumOfGifts())

for (let i=0; i<arrShapes.length; i++) {
    if (arrShapes[i].NumOfGifts() < arrShapes[i].NumOfSquares()) result1++
}

console.log ('RESULT1: ' + result1);

// 5 gifts
let arrGifts: Gift[] = [];
arrGifts.push(new Gift(0,['###', '..#', '###']));
arrGifts.push(new Gift(1,['##.', '.##', '###']));
arrGifts.push(new Gift(2,['..#', '.##', '###']));
arrGifts.push(new Gift(3,['###', '##.', '##.']));
arrGifts.push(new Gift(4,['###', '.#.', '###']));
arrGifts.push(new Gift(5,['.##', '##.', '#..']));

