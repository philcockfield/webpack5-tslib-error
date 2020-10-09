import { Subject } from "rxjs";

console.log("Subject", Subject);

const s = new Subject();
s.subscribe((e) => console.log("e", e));
s.next(123);

document.body.innerHTML = "<h1>Working.</h1>";
