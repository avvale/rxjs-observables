import { from } from 'rxjs';
import { map } from 'rxjs/operators';

// map operator
//emit (1,2,3,4,5)
const obs = from([1, 2, 3, 4, 5]);

obs.pipe(
    map((item) => {
        return item * 2;
    })
).subscribe(data => console.log('data01: ', data));

// salida de consola
// data01:  2
// data01:  4
// data01:  6
// data01:  8
// data01:  10
