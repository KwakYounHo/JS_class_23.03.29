// CommonJS방식
// module.exports = function (array, name) {
//   for (let i=0; i<array.length; i++) {
//     if (array[i] === name) {
//       console.log(i+' 번째 인물입니다.');
//     } else {
//       console.log(`${i} 번째 인물 : 해당 순서는 ${name}씨가 아닙니다`)
//     }
//   }
// }


// ESM방식
export default function (array, name) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === name) {
      console.log(i+' 번째 인물입니다.');
    } else {
      console.log(`${i} 번째 인물 : 해당 순서는 ${name}씨가 아닙니다`)
    }
  }
}