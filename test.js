const myArray = [10, 11, 10, 13, 20, 100, 250, 88, 99, 101, 107, 799];
let OddArray = [];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    if (element % 2 == 0) {
        OddArray.push(element);
        console.log("odd Number", element);
    }
    if (element % 2 !== 0) {
        OddArray.push(element);
        console.log("even Number", element);
    }


}
