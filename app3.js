import fs from 'fs';

function User(id, password, email) {     // 연, 월, 일을 좀 더 직관적으로
  this.id       = id
  this.password = password;
  this.email    = email;
}                                       // 함수 c랑 다를 것이 없다

const d = new User('kwakyounho', 'root', 'a@a.a');
// console.log(d);
const e = new User('test','root','b@b.b');
const f = new User('most','root','c@c.c');

let names    = ['kwakyounho','test','most'];
let passwords = ['root','root','root'];
let emails   = ['a@a.a','b@b.b','c@c.c',];

// console.log(d);
// console.log(e);
// console.log(f);

let members = [];
for (let i=0; i<3; i++) {
  members.push(new User(names[i], passwords[i], emails[i]));
}               // 많이 보던 패턴 -> ul, li = chidren이니 뭐니 다 이거에요

fs.writeFileSync('members.JSON', JSON.stringify(members, null, 2), 'utf-8');

console.dir(members);