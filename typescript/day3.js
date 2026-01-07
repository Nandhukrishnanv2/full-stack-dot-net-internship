"use strict";
// typescript classes
// use  class keyword 
// constructor in ts
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name = "biju kuttan";
    age = 22;
    oldage = 0;
    getAge() {
        return this.age;
    }
    setAge(a) {
        this.oldage = this.age;
        this.age = a;
    }
}
let stu = new Student();
console.log(stu.name);
stu.name = "arjun biju";
console.log(stu.getAge());
console.log(stu.name);
stu.setAge(25);
console.log(stu.getAge());
console.log(stu.oldage);
//# sourceMappingURL=day3.js.map