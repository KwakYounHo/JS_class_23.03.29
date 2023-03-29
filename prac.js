import searching from './search_module.js'
const studentList = [
  "강지민",
  "곽윤호",
  "권예준",
  "김동주",
  "김은아",
  "김종윤",
  "김지섭",
  "김형진",
  "노수민",
  "류은이",
  "박달재",
  "박수연",
  "박준형",
  "성해경",
  "이경택",
  "이세민",
  "이재권",
  "임지성",
  "장루빈",
  "정성철",
  "정지은",
  "정희은",
  "최대건",
  "한유진",
  "허진",
];
// console.log(studentList[studentList.length-1]);
// ================ 메모 ===================
// 배열[마지막번째]
// length는 항상 마지막 인덱스보다 +1 많다
// 마지막 원소는 length보다 항상 -1이다.
// =========================================

// for (let i=0; i<studentList.length; i++) {
//   if (studentList[i] === "박수연") {    //   다른 사람을 검색하려면? -> 리터럴을 바꿔야 함
//     console.log(i+' 번째 인물');      // 코드를 뜯어야 함 -> 고쳐야 함 -> 자존심 상함
//   }
// }

// function searching(array, name) {
//   for (let i=0; i<array.length; i++) {
//     if (array[i] === name) {
//       console.log(i+' 번째 인물입니다.');
//     } else {
//       console.log(`${i} 번째 인물 : 해당 순서는 ${name}씨가 아닙니다`)
//     }
//   }
// }
// searching(studentList,'곽윤호')
searching(studentList,'곽윤호');