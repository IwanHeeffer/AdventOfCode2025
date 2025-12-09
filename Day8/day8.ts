import * as fs from 'fs';

class Coordinate {
    positionX: number;
    positionY: number;
    positionZ: number;
    network: number;

    constructor (x:number, y:number, z:number) {
        this.positionX = x;
        this.positionY = y;
        this.positionZ = z;
        this.network = 0
    }

    public distance (coord: Coordinate): number {
        return Math.sqrt((coord.positionX-this.positionX)**2 + (coord.positionY-this.positionY)**2 + (coord.positionZ-this.positionZ)**2)
    }

    public setNetworkID (networkID: number) {
        this.network = networkID;
    }
}

class Distance {
    coord1: number;
    coord2: number;
    distance: number;

    constructor (c1: number, c2:number, d:number) {
        this.coord1 = c1;
        this.coord2 = c2;
        this.distance = d;
    }
}
// ====================================================

function compareDistance(a: Distance, b: Distance) {
    return a.distance - b.distance;
}

function compareNetwork(a: Coordinate, b: Coordinate) {
    return a.network - b.network;
}

function compareCount(a: number[], b: number[]) {
    return b[1] - a[1];
}

const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const lines: string[] = content.split(/\r?\n/);

let arrInput: string[][] = [];
let arrCoords: Coordinate[] = [];
let arrDistance: Distance[] = [];
let arrNetwork: number[][] = [];
let result1: number = 1;

// zet input in array[][]
for (let i=0; i<lines.length; i++) {arrInput[i] = lines[i].split(',');}

// PART 1
// Vul array met coordinaten
for (let i=0; i<arrInput.length; i++){
    arrCoords.push(new Coordinate(+arrInput[i][0], +arrInput[i][1], +arrInput[i][2]));
}

// Vul array met afstanden (coord1, coord2, afstand)
for (let i=0; i<arrCoords.length; i++) {
    for (let j=0; j<i; j++) {
        arrDistance.push(new Distance(i, j, arrCoords[i].distance(arrCoords[j])));
    }
}

// sorteer array met afstanden op afstand
arrDistance.sort(compareDistance);

// knoop coordinaten aan elkaar
let networkID: number = 0;
for (let i=0; i<1000; i++) {
    // if (arrCoords[arrDistance[i].coord1].network != 0 && arrCoords[arrDistance[i].coord2].network != 0 && arrCoords[arrDistance[i].coord1].network != arrCoords[arrDistance[i].coord2].network) {
        networkID++
        if (arrCoords[arrDistance[i].coord1].network == 0) {
            arrCoords[arrDistance[i].coord1].setNetworkID(networkID);
        } else {
            //Lees netwerkID en wijzig alle ID's die hetelfde zijn in array naar nieuw netwerkID 
            let oldNetworkID = arrCoords[arrDistance[i].coord1].network;
            for (let j=0; j<arrCoords.length; j++) {
                if (arrCoords[j].network == oldNetworkID) {arrCoords[j].setNetworkID(networkID);}
            }
        }
        if (arrCoords[arrDistance[i].coord2].network == 0) {
            arrCoords[arrDistance[i].coord2].setNetworkID(networkID);
        } else {
            //Lees netwerkID en wijzig alle ID's die hetelfde zijn in array naar nieuw netwerkID 
            let oldNetworkID = arrCoords[arrDistance[i].coord2].network;
            for (let j=0; j<arrCoords.length; j++) {
                if (arrCoords[j].network == oldNetworkID) {arrCoords[j].setNetworkID(networkID);}
            }
        }
    // }
}

// Sorteer array met coordinaten obv netwerkID
arrCoords.sort(compareNetwork);

let tempNetwork: number = arrCoords[0].network;
let counter: number = 0;
let index: number = 0;
for (let i=0; i<arrCoords.length; i++) {
    if (arrCoords[i].network == tempNetwork) {
        counter++
    } else {
        arrNetwork[index] = [tempNetwork, counter];
        index++
        counter = 1
        tempNetwork = arrCoords[i].network;
    }
}
arrNetwork[index] = [tempNetwork, counter];
if (arrNetwork[0][0] == 0) {arrNetwork[0][1]=0;}

arrNetwork.sort(compareCount);

result1 = arrNetwork[0][1] * arrNetwork[1][1] * arrNetwork[2][1];

console.log (result1);