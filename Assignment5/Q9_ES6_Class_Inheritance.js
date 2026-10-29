// Q9: Rewrite Person -> Student inheritance using ES6 classes.
// The output is equivalent to the prototype-based example in Q5.

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        // super() calls the Person constructor.
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const student = new Student("Aditi", "Computer Science");

student.showName();   // Inherited from Person
student.showBranch(); // Defined in Student

console.log(student instanceof Student); // true
console.log(student instanceof Person);  // true

/*
Comparison with Q5:
Both versions let Student inherit the name property and showName() method
from Person, while Student adds branch and showBranch(). ES6 classes provide
clearer syntax; class methods are still stored on the prototype chain.
*/
