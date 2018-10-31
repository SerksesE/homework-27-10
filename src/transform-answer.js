// module.exports.groupAdultsByAgeRange = function (people) {
//   return people
//     .filter(person => person.age >= 18)
//     .reduce((groups, person) => {
//       for (let [max, label] of [
//         [20, "20 and younger"],
//         [30, "21-30"],
//         [40, "31-40"],
//         [50, "41-50"],
//         [undefined, "51 and older"]]) {
//         if (max === undefined || person.age <= max) {
//           groups[label] = groups[label] || []
//           groups[label].push(person)
//           break;
//         }
//       }
//       return groups
//     }, {})
// }

const people = [
  { name: "pete", age: 10 },
  { name: "dove", age: 17 },
  { name: "dave", age: 18 },
  { name: "hall", age: 19 },
  { name: "donn", age: 20 },
  { name: "trey", age: 21 },
  { name: "hann", age: 29 },
  { name: "chew", age: 30 },
  { name: "cloe", age: 31 },
  { name: "dart", age: 39 },
  { name: "this", age: 40 },
  { name: "dame", age: 41 },
  { name: "henk", age: 49 },
  { name: "anna", age: 50 },
  { name: "olga", age: 51 },
  { name: "bert", age: 52 },
  { name: "oldd", age: 120 },
];

homework = (people) => {
return people
.filter(person => person.age >= 18)
.reduce((acc, item) => {
  for (let [maxAge, ageGroup] of [
    [20, "20 and younger"],
    [30, "21-30"],
    [40, "31-40"],
    [50, "41-50"],
    [undefined, "50 and older"]]) {
      if(maxAge === undefined || item.age <= maxAge) {
        acc[ageGroup] = acc[ageGroup] || []
        acc[ageGroup].push(item)
        break;
      }
    }
    return acc
}, {})
}

console.log(homework(people));
