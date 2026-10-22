// Object Syntax

//      let objectName = {
//      key1 : value1,
//      key2 : value2
//      };

// Normal object

let id = {
    name : "Sharmila",
    age : 21,
    course : "BTECH"
};

console.log(id);

// Add the property in object

let student = {
    name : "Chinnu",
};

student.age = 21;
student.course = "BTECH";

console.log(student);

// Update the property in object

let person = {
    name : "Chinnu",
    age : 20
};

person.age = 21;

console.log(person.age);

// Delete the property in object

let member = {
    name : "Chinnu",
    age : 21,
    course : "BTECH"
};

delete member.course;

console.log(member);

// Nested objects - the object is in the object inside

let idd = {
    name : "Chinnu",
    age : 21,

    address : {
        city : "Tirupati",
        state : "Andhra Pradesh"
    }
};

console.log(idd.name);
console.log(idd.address.city);
console.log(idd.address.state);

// Methods inside object

let studentt = {
    name : "Chinnu",
    age : 21,

    introduce : function() {
        console.log("Hello!");
        console.log("My name is " + this.name);
    }
};

studentt.introduce();

// this keyword in object

let product = {
    name : "Laptop",
    price : 43000,

    showDetails() {
        console.log(this.name);
        console.log(this.price);
    }
};

product.showDetails();

// Object destructuring

let identity = {
    name : "Chinna",
    age : 20,
    course : "BTECH"
};

let { name, age, course } = identity;

console.log(name);
console.log(age);
console.log(course);

// Object - keys , values , entries

let personn = {
    name : "Chinnu",
    age : 21,
    course : "BTECH"
};

console.log(Object.keys(personn));
console.log(Object.values(personn));
console.log(Object.entries(personn));

// Optional Chaining(?.)

let memberr = {
    name : "Chinnu"
};

console.log(member.address?.city);

// Nullish coalescing(??)

let identy = {
    name : "Chinnu"
};

let city = identy.city ?? "Not Provided";

console.log(city);

// Object copying

let student1 = {
    name : "Chinnu"
};

let student2 = student1;

student2.name = "Chinna";

console.log(student1.name);
console.log(student2.name);

// with spread operator - shallow copy

let studentt1 = {
    name : "Chinnu"
};

let studentt2 = {...studentt1};

studentt2.name = "Chinna";

console.log(studentt1.name);
console.log(studentt2.name);

// Objects assign()

let people = {
    name : "Chinnu"
};

let extraDetails = {
    age : 21,
    course : "BTECH"
};

Object.assign(people,extraDetails)

console.log(people);

// Object freeze() - can't add or update the properties

let persson = {
    name : "Chinnu",
    age : 21
};

Object.freeze(persson);

persson.age = 22;
persson.city = "Banglore";

console.log(persson);

// Object.seal() - can't add and delete but can update

let unique = {
    name : "Chinnu",
    age : 20
};

Object.seal(unique);

unique.age = 21;
unique.city = "Banglore";
delete unique.name;

console.log(unique);

// Object.hasOwn()

let her = {
    name : "Chinnu",
    age : 21
};

console.log(Object.hasOwn(her, "name"));
console.log(Object.hasOwn(her, "city"));

// Object.is()

console.log(Object.is(10,10));
console.log(Object.is(10,20));
console.log(Object.is(NaN,NaN));
console.log(Object.is(0,-0));