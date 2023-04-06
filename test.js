//Object.assign() : 각 객체의 프로퍼티를 타겟에 복사

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { a: 5, f: 6 }; //동일한 객체는 덮어씀

const x = Object.assign({}, obj1, obj2, obj3); //es5
console.log(x);

const y = { ...obj1, ...obj2, ...obj3 }; //es6
console.log(y);
