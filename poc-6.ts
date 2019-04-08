import { Observable, Subject } from 'rxjs';

// ejemplo de observable + subject
console.log("POC 06 - Observable + Subject");
const observable = new Observable(subscriber => {
    subscriber.next(Math.random());
});

const subject = new Subject();

subject.subscribe(v => console.log('consumer A: ' + v));
subject.subscribe(v => console.log('consumer B: ' + v));

observable.subscribe(subject);

/* Prints SAME values for both consumers */
// consumer A: 0.8495447073368834
// consumer B: 0.8495447073368834
