// Creating a Set with 10 individual string values
let mySet = new Set([
    "apple", 
    "banana", 
    "cherry", 
    "date", 
    "elderberry", 
    "fig", 
    "grape", 
    "honeydew", 
    "kiwi", 
    "lemon"
]);

// Demonstrating the use of add() to add an element to the Set
mySet.add("mango"); // Adds "mango" to the Set
console.log("After adding 'mango':", mySet);

// Using has() to check if an element exists in the Set
console.log("Does the Set have 'banana'? ", mySet.has("banana")); // Should return true
console.log("Does the Set have 'mango'? ", mySet.has("mango")); // Should return true

// Demonstrating the use of delete() to remove an element from the Set
mySet.delete("banana"); // Removes "banana" from the Set
console.log("After deleting 'banana':", mySet);

// Using has() again to check if 'banana' is still in the Set
console.log("Does the Set have 'banana' after deletion? ", mySet.has("banana")); // Should return false

// Using forEach() to output each member of the Set to the console
console.log("Iterating over the Set using forEach():");
mySet.forEach(item => {
    console.log(item); // Prints each element in the Set
});

// Using clear() to remove all elements from the Set
mySet.clear();
console.log("After clearing the Set:", mySet);

// Using has() after clear() to check if any element exists
console.log("Does the Set have 'apple' after clearing? ", mySet.has("apple")); // Should return false
