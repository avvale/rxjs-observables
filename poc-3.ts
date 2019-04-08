import { ReplaySubject } from 'rxjs';

// registra todo el streaming anterior y posterior a la subscripción
console.log("POC 03 - ReplaySubject");
const observer = new ReplaySubject();

observer.next(1);
observer.next(2); 
observer.next(3);

setTimeout(function() {
    observer.next(4);
}, 2000);

setTimeout(function () {
    observer.next(5);
}, 5000);

observer.subscribe(data => console.log('data01: ', data));
observer.subscribe(data => console.log('data02: ', data));