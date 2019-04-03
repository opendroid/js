"use strict";

class Animal {
    constructor (type, legs) {
        this.type = type;
        this.legs = legs;
    }
    sayType() {
        console.log(`class Animal: I am a ${this.type}`);
    }
    sayLegs() {
        console.log(`class Animal: I have ${this.legs} legs`);
    }
}

/**
 * Note that though it is a keyword class thee object in JS are still functions.
 * Classes always  "use strict"
 * Inheritance is easier
 */
class Student extends Animal {
    constructor (name, grade) {
        super("mamel", 4);
        this.name = name;
        this.grade = grade;
    }

    // you do not have to say function. It is implicit.
    // It is still prototype based.
    sayName () {
        console.log(`Class Student: My name is ${this.name}`);
    }
    sayGrade () {
        console.log(`Class Student: I am in grade ${this.grade}`);
    }
}

let aidenEvilBro = new Student("Aiden", 8);
aidenEvilBro.sayName();
aidenEvilBro.sayGrade();
aidenEvilBro.sayType();
aidenEvilBro.sayLegs();

