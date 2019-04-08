import { BehaviorSubject } from 'rxjs';

// registra el último elemento del streaming anterior y lo posterior a la subscripción, con un item de inicio por obligación
console.log("POC 04 - BehaviorSubject");
const observer = new BehaviorSubject(0);

// observer.next(1);
// observer.next(2); 
// observer.next(3);

setTimeout(function() {
    observer.next(4);
}, 2000);

setTimeout(function () {
    observer.next(5);
}, 5000);

observer.subscribe(data => console.log('data01: ', data));
observer.subscribe(data => console.log('data02: ', data));

observer.next(6);
