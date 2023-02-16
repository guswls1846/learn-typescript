// 이넘(Enum)
enum Avengers {
  Capt,
  Ironman,
  Hulk,
}

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

const myHero = Avengers.Capt;
// const direction = Direction.Down;

// any
let a: any = "hi";
a = 20;
a = false;

// void
function sayHi(): void {
  // return 'a';
}

// 타입 추정 (type assertion)
let str = "이건 문자열 타입이 됩니다.";

let num: number;
num = "str" as any;

const divElement = document.querySelector("#app");
divElement.innerHTML;
// const empty = document.querySelector('#app') as null;
// empty.innerHTML;
export {};
