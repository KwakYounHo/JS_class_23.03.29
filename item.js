const itsMe = {                       // 여러명이 된다면? 반복이 너무 어려워 리터럴의 한계
  firstName : 'kwak',
  lastName  : 'younho',
  age       : 29,
  email     : 'a@a.a',
  phone     : '010-1234-5678',
  address   : 'GreenComputer',
  like      : 'Develop',
  hate      : false,
  hobby     : 'sing',
  coffee    : false,
  food      : 'anything',
  sleepTime : true
}                                     // 두 번은 그렇지만 한 번정도는 써보십시오

function gaeIn(firstName,lastName,age,email,phone,address,like,hate,hobby,coffee,food,sleepTime) {
  this.firstName = firstName;
  this.lastName  = lastName;
  this.age       = age;
  this.email     = email;
  this.phone     = phone;
  this.address   = address;
  this.like      = like;
  this.hate      = hate;
  this.hobby     = hobby;
  this.coffee    = coffee;
  this.food      = food;
  this.sleepTime = sleepTime;
}