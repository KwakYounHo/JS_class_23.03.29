// function c(year,month,day) { // 객체 B랑 이거랑 무슨 차이가 있나
//   return {
//     year  : year,
//     month : month,
//     dat   : day,
//   };
// }

function c(year, month, day) {
  this.year  = year;    // .이 붙어있다 -> .은 객체
  this.month = month;
  this.day   = day;
}

const test = c(2023, 3, 29)
console.log(test);

// const b = { // 직접 작성하여서 변경이 어렵다 -> 리터럴
  // year  : 2023,
  // month : 3,
  // day   : 29
// }