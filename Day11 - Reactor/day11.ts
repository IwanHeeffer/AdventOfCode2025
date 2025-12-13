import * as fs from 'fs';
import { PassThrough } from 'stream';

class Device {
    id: string;
    output: string[];

    constructor (id: string) {
        this.id = id;
        this.output = [];
    }

    addOutput (output: string) {
        this.output.push(output);
    }
}

function Paths2Out (device: Device):number {
    if (device.output[0] == 'out') {return result1++} else {
        for (let i=0; i<device.output.length; i++) {
            for (let j=0; j<arrDevices.length; j++) {
                if (arrDevices[j].id == device.output[i]) {Paths2Out(arrDevices[j])}
            }
        }
    } 
}


function PathsA2B (device: Device, end:string):number {
    if(device.id == end) return 1;
    if(device.id in cache) return cache[device.id];
    cache[device.id] = 0;

    for (let i=0; i<device.output.length; i++) {
        cache[device.id] += PathsA2B(objDevices[device.output[i]], end)
    }

    return cache[device.id];
}


const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const lines: string[] = content.split(/\r?\n/);

let arrInput: string[][] = [];
let arrDevices: Device[] = [];
let result1: number = 0;
let result2: number = 0;
let objDevices: {[n:string]:Device} = { 'out': new Device('out') };
let cache: {[n:string]:number} = {};

// zet input in array[][]
for (let i=0; i<lines.length; i++) {arrInput[i] = lines[i].split(/[:,]\s*|\s+/);}

// zet input in array of devices
for (let i=0; i<arrInput.length; i++) {
    arrDevices.push(new Device(arrInput[i][0]));
    objDevices[arrInput[i][0]] = new Device(arrInput[i][0]);
    for (let j=1; j<arrInput[i].length; j++) {
        arrDevices[i].addOutput(arrInput[i][j])
        objDevices[arrInput[i][0]].addOutput(arrInput[i][j])
    }
}


// PART 1
for (let i=0; i<arrDevices.length; i++) {
    if (arrDevices[i].id == 'you') {Paths2Out(arrDevices[i])}
}
console.log ('RESULT1: ' + result1);

// PART 2
let iSvrDac: number = 0
let iDacFft: number = 0
let iFftOut: number = 0
let iSvrFft: number = 0
let iFftDac: number = 0
let iDacOut: number = 0

for (let i=0; i<arrDevices.length; i++) {
    if (arrDevices[i].id == 'svr') {
        cache = {};
        iSvrDac = PathsA2B(arrDevices[i], 'dac');
        console.log ('SRV - DAC: ' + iSvrDac)
        cache = {};
        iSvrFft = PathsA2B(arrDevices[i], 'fft');
        console.log ('SVR - FFT: ' + iSvrFft)
    }
    if (arrDevices[i].id == 'dac') {
        cache = {};
        iDacFft = PathsA2B(arrDevices[i], 'fft');
        console.log ('DAC - FFT: ' + iDacFft)
        cache = {};
        iDacOut = PathsA2B(arrDevices[i], 'out');
        console.log ('DAC - OUT: ' + iDacOut)
    }
    if (arrDevices[i].id == 'fft') {
        cache = {};
        iFftDac = PathsA2B(arrDevices[i], 'dac');
        console.log ('FFT - DAC: ' + iFftDac)
        cache = {};
        iFftOut = PathsA2B(arrDevices[i], 'out');
        console.log ('FFT - OUT: ' + iFftOut)
    }
}
result2 = (iSvrDac * iDacFft * iFftOut) + (iSvrFft * iFftDac * iDacOut);
console.log ('RESULT2: ' + result2);
