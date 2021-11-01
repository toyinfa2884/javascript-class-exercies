let arrayObject = [
{
  id:3,
  fullname:"saheed adesuwa",
  email:"saheed@semicolon.africa",
  nickname:"sa"

},
{
  id:2,
  fullname:"yetunde hamad",
  email:"yetunde@semicolon.africa",
  nickname:"yh"
},
{
  id:1,
  fullname:"goodnews confidence",
  email:"goodnews@semicolon.africa",
  nickname:"gc"
},
{
  id:4,
  fullname:"gideon mojoyin",
  email:"gideon@semicolon.africa",
  nickname:"gm"
  },
];
// Ascending order.
arrayObject.sort((a,b) => a.id - b.id);
arrayObject.forEach((e) => {
  console.table(`${e.fullname} ${e.email} ${e.nickname}  ${e.id}`);
  });

  // descending order.
  arrayObject.sort((a,b) => b.id - a.id);
  arrayObject.forEach((e) => {
console.table(`${e.fullname}  ${e.email} ${e.nickname} ${e.id}`);
});
