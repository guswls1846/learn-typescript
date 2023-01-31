function sum(a: number, b: number): number {
  return a + b;
}
const test1 = sum(10, 20);
// sum('10', '20'); // Error: '10'은 number에 할당될 수 없습니다.

console.log(test1);

class Student {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}
