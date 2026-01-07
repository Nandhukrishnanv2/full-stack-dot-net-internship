// typescript classes
// use  class keyword 
// constructor in ts


class Student{
    name : string = "biju kuttan";
    private age : number=22;
    oldage : number = 0;

    getAge():number{
        return this.age;
    }
    setAge(a: number):void{
        this.oldage=this.age;
        this.age=a;
    }

}
let stu = new Student();
console.log(stu.name);
stu.name="arjun biju";
console.log(stu.getAge());
console.log(stu.name);
stu.setAge(25);
console.log(stu.getAge());
console.log(stu.oldage);