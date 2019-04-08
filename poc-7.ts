import { Observable, Subject } from 'rxjs';

// ejemplo de observable + subject
console.log("POC 08 - Observable + Subject");

const obs = new Observable(subscriber => {
    subscriber.next('1 from observable');
    subscriber.next('2 from observable');
    subscriber.next('3 from observable');

    setTimeout(function () {
        subscriber.next('4 from observable');
    }, 2000);

    // subscriber.complete();
});

const subObs1 = new Subject();
const subObs2 = new Subject();

subObs1.next('1 from subject 1');
subObs1.next('2 from subject 1');
subObs1.next('3 from subject 1');

setTimeout(function () {
    subObs1.next('4 from subject 1');
}, 2000);

subObs1.subscribe(data => console.log('data01: ', data));
subObs1.subscribe(data => console.log('data02: ', data));

obs.subscribe(data => console.log('data03: ', data));
obs.subscribe(subObs1);
obs.subscribe(subObs2);

subObs2.subscribe(data => console.log('data04: ', data));
