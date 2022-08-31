let myArray = [
    {
        id: 1,
        name: "John",
        age: 30,
        city: "New York",
        index: 0
    },
    {
        id: 2,
        name: "Mary",
        age: 25,
        city: "Paris",
        index: 1
    },
    {
        id: 3,
        name: "Mike",
        age: 27,
        city: "London",
        index: 2
    },
    {
        id: 4,
        name: "Adam",
        age: 29,
        city: "Tokyo",
        index: 3
    },
    {
        id: 5,
        name: "Peter",
        age: 28,
        city: "New York",
        index: 4
    }
];

const test = { id: 99, name: "test", age: 30, city: "New York" }
test["index"] = 3;

const test2 = { id: 55, name: "test2", age: 43, city: "Mozambique" }

test2["index"] = 2;

myArray.splice(3, 0, test);
myArray.splice(2, 0, test2);

// console.log("pushed new object", myArray);

for (let i = 3; i < myArray.length; i++) {
    myArray[i].index = i;
}

console.log("updated index", myArray);

/* for (let i = 4; i < myArray.length; i++) {
    myArray[i].index = i;
} */

// console.log("updated index", myArray);

