const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

const removeDuplicates = (array) => {
    const unique = [...new Set(array)]; // used a native object 'Set' to store unique values and get an array with unique values 
    return unique;
};

console.log(removeDuplicates(letters));