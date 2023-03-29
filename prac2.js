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
// 어떻게 하면 배열에 있는 리터럴을 객체로 만들 수 있을까?
// 이름을 name으로, order라는 이름으로 순서를
// 혹시 매개변수가 숫자여야만 함수를 실행하게 만드려면?
// console.log(typeof(typeof(order)))

const example = {
  order : 1,
  name  : '곽윤호'
}

// ?일단 쌩 함수로
function makeObject(order,name) {
  if (typeof(order) === 'number') {
    return {
      order : order,
      name  : name
    }
  } else {
    console.error('첫 매개변수는 숫자로 넣으세요');
  }
}

// ?construct 함수
function makeConstruct(order, name) {   // 무엇으로부터 만들어졌는지 이름이 붙는다
  this.order = order;
  this.name  = name;

  function order(order) {   // 위 숫자열일때만 실행해라와 같음
    if (typeof(order) === 'number') {
      return this._order;
    }
  }
}

// java처럼 쓰기
class User {
  constructor(order,name) {
    this.order = order;
    this.name  = name;
  }
  set order(order) {
    if (typeof (order) === 'number') {
      this._order = order;
    }
  }
}

let test = [];
studentList.forEach((student, index) => {
  test.push(new User(index, student))
})

console.log(test);