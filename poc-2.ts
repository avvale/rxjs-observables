import { Subject } from 'rxjs';

// registra streaming a partir de su subscripción
console.log("POC 02 - Subject");
const observer = new Subject();

observer.next(1);
observer.next(2); 
observer.next(3);

setTimeout(function() {
    observer.next(4);
}, 2000);

observer.subscribe(data => console.log('data01: ', data));
observer.subscribe(data => console.log('data02: ', data));