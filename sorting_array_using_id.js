let arrayObject = [
{
   id:3,
   firstname:"saheed",
   lastname: "adesuwa",
},
{
   id:2,
   firstname:"yetunde",
   lastname: "hamad",
},
{
   id:1,
   firstname:"goodnews",
   lastname: "confidence",
},
{
   id:4,
   firstname:"gideon",
   lastname: "mojoyin",
}
];
// Ascending order.
arrayObject.sort((a,b) => a.id - b.id);
arrayObject.forEach((e) => {
  console.log(`${e.firstname} ${e.lastname} ${e.id}`);
  });

  // descending order.
  arrayObject.sort((a,b) => b.id - a.id);
  arrayObject.forEach((e) => {
    console.log(`${e.firstname} ${e.lastname} ${e.id}`);
    });
