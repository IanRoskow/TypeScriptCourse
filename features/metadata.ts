import 'reflect-metadata';

@controller
class Plane {
    color: string = 'red';

    @get('/login')
    fly(): void {
        console.log('vrrrrr');
    }
}
function get(path: string) {
    return function (target: Plane, key: string) {
        Reflect.defineMetadata('path', path, target, key);
    };
}

function controller(target: typeof Plane) {
    for (let key in target.prototype) {
        const path = Reflect.getMetadata('path', target.prototype, key);
        //How you can implement router and middleware
        //const middleware = Reflect.getMetadata('middleware', target.prototype)

        //router.get(path, target.prototype[key]);
    }
}

// const plane = {
//     color: 'red',
// };

// Reflect.defineMetadata('note', 'bye there', plane);
// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const note = Reflect.getMetadata('note', plane);
// const colornote = Reflect.getMetadata('note', plane, 'color');

// console.log(colornote, note);
// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note, height);
