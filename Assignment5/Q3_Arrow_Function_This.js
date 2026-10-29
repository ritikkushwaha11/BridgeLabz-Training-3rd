// Q3: An arrow function does not create its own `this`.

const user = {
    name: "Aditi",

    // In this arrow function, `this` comes from the surrounding scope,
    // not from the user object. In a Node.js file, this.name is undefined.
    showName: () => {
        console.log("Arrow function name:", this.name); // undefined
    }
};

user.showName();

// Fix: use a normal method, whose `this` refers to the object
// used to call the method (user.showName()).
const correctedUser = {
    name: "Aditi",

    showName: function () {
        console.log("Normal function name:", this.name); // Aditi
    }
};

correctedUser.showName();

/*
Explanation:
Arrow functions do not have their own `this`; they inherit it from the
surrounding scope. A normal function called as object.showName() receives
the object as `this`, so this.name refers to the object's name property.
*/
