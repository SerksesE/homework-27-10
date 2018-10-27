module.exports.groupAdultsByAgeRange = function (array) {
  //puts the array into a new variable
  const array1 = array

  //adds different age groups
  array1.forEach((age => {
    if (age.age <= 20) {
      age.ageGroup = "20 and younger"
    } else if (age.age > 20 && age.age <= 30) {
      age.ageGroup = "21-30"
    } else if (age.age > 30 && age.age <= 40) {
      age.ageGroup = "31-40"
    } else if (age.age > 40 && age.age <= 50) {
      age.ageGroup = "41-50"
    } else if (age.age > 50) {
      age.ageGroup = "51 and older"
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
  array1.forEach((age) => { delete age.ageGroup });

  //check if array1 = array is back to the original state
  //console.log(array1);

  //returns array2 which has the right layout
  return array2;
  
};




