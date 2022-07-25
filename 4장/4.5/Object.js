/* 
let empty = {};
let point = { x: 0, y: 0};
let p2 = { x: point.x, y: point.y+1};
let book = {
    "main title": "Javascript",
    "sub-title": "The Definitive Guide",
    for: "all audiences",
    author: {
        firstname: "David",
        surname: "Flanagan"
    }
};
 */
/* let o = {};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();
console.log(q.x+q.y); */
let book = {
    "main title": "Javascript",
    "sub-title": "The Definitive Guide",
    for: "all audiences",
    author: {
        firstname: "David",
        surname: "Flanagan"
    }
};
let surname = undefined;
/* if(book) {
    if(book.author) {
        surname = book.author.surname;
    }
} */
surname = book?.author?.surname;
console.log(surname);