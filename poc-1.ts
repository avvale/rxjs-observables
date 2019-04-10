import { Observable } from 'rxjs';

// registra streaming y envío todos los datos que contiene al callback
console.log("POC 01 - Observable");
const obs = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);

    setTimeout(function() {
        subscriber.next(4);
    }, 2000);

    // if throw complete don't launch
    // subscriber.complete();
});

obs.subscribe(data => console.log('data01: ', data));
obs.subscribe(data => console.log('data02: ', data));
