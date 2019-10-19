const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
];

const sumAges = (total, num) => {
    return total + num;
};

const getAges = (obj) => {
    return obj.age
};

//Make use of the map function to get the ages
//It should contain a function that takes a callback
//The callback adds all the ages together and returns the number
//The main function should log the string "The collective age of the HYF team is: [number]" to the console, and afterwards return the number

const showCollectiveAge = () => {

    const ages = hackYourFutureMembers.map(getAges);
    const totalAge = ages.reduce(sumAges);
    console.log("The collective age of the HYF team is: " + totalAge);
    return totalAge;
}
showCollectiveAge();

