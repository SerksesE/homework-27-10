module.exports.groupAdultsByAgeRange = function (array) {
  //puts the array into a new variable
  const array1 = array

  //adds different age groups
  array1.forEach((person => {
    if (person.age <= 20) {
      person.ageGroup = "20 and younger"
    } else if (person.age > 20 && person.age <= 30) {
      person.ageGroup = "21-30"
    } else if (person.age > 30 && person.age <= 40) {
      person.ageGroup = "31-40"
    } else if (person.age > 40 && person.age <= 50) {
      person.ageGroup = "41-50"
    } else if (person.age > 50) {
      person.ageGroup = "51 and older"
    }
  }));

  //check the result after adding the age group
  //console.log(array1);

  //create new array that holds objects
  const array2 = {}

  //creates a copy of the original array
  array1.forEach(person => {

    //checks if the array already exists in array2 
    array2[person.ageGroup] ?

      //if the array already exsist pushes a person in an age group category
      array2[person.ageGroup].push({ name: person.name, age: person.age })

      //creates a new array to put the age group and people in then pushes the first age group and person to it
      : (array2[person.ageGroup] = [], array2[person.ageGroup].push({ name: person.name, age: person.age }));
  });

  //check the content of array2
  //console.log(array2);

  //deletes the added age group property from the original array
  array1.forEach((person) => { delete person.ageGroup });

  //check if array1 = array is back to the original state
  //console.log(array1);

  //returns array2 which has the right layout
  return array2;
};




