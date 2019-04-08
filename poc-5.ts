import { AsyncSubject } from 'rxjs';

// solo registra el último elemento del streaming cuando se ejecuta el método complete 
console.log("POC 05 - AsyncSubject");
const observer = new AsyncSubject();

observer.next(1);
observer.next(2); 
observer.next(3);

setTimeout(function() {
    observer.next(4);
}, 2000);

setTimeout(function () {
    observer.next(5);
}, 5000);

observer.complete();

observer.subscribe(data => console.log('data01: ', data));
observer.subscribe(data => console.log('data02: ', data));