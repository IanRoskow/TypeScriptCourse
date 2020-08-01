import 'reflect-metadata';

const plane = {
    color: 'red',
};

Reflect.defineMetadata('note', 'bye there', plane);
Reflect.defineMetadata('note', 'hi there', plane, 'color');

const note = Reflect.getMetadata('note', plane);
const colornote = Reflect.getMetadata('note', plane, 'color');

console.log(colornote, note);

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note, height);
