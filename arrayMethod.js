// question1 = using array method forEach, print out the firstname.
let objArray = [{
  gender: 'male',
  firstname: 'John',
  lastname: 'Smith',
},
{
  gender: 'male',
  firstname: 'Demola',
  lastname: 'Femi',
},
{
  gender: 'female',
  firstname: 'Tife',
  lastname: 'Harry',
}
];
objArray.forEach((e) => {
  console.log(`${e.firstname}`);
  });

  //question2= using array method map, print out a new key fullname per object and the
  // value would be the combination of the firstname and the lastname.
function newName(anotherName){
  let fineName = {fullname: anotherName.firstname + " " + anotherName.lastname }
  return fineName;

}
console.log(objArray.map(newName))

  //question3= using array method filter, returnan array containing arrayObject
  // with gender male.
function filterMale(male){
  return male.gender === 'male';
}
console.log(objArray.filter(filterMale))

//question4= do question3 above for object with gender female.

function filterFemale(female){
  return female.gender === 'female';
}
console.log(objArray.filter(filterFemale))

// question5 = create a new key age per object, the value of age per object is
// equivalent to the total sum of both the firstname and lastname.
function age(theirAge){
 theirAge['age'] = theirAge.firstname.length + theirAge.lastname.length;
}
objArray.map(age);
console.log(objArray);
