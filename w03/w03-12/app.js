// FOR LOOP
for(let i=1;i<=5;i++){
    console.log("Number "+1);
}
// WHILE LOOP
let i =1;
while(i<=5){
console.log("number "+i);
i++;
}
// DO WHILE
let j=1;
do{
console.log("Number"+j);
j++;
}while(j<=5);

// LOOP THROUGH ARRAY
const fruits =['apple','papaya','banana','cherry'];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
// FOREACH
fruits.forEach(function(fruit, index, array){
    console.log(`${index}: ${fruit}`);
    console.log(array);
});
// MAP
const users =[
    {
        id:1,
        name:'John'
    },
    {
        id:2,
        name:'sam'
    },
    {
        id:3,
        name:'sora'
    },
];
const ids = users.map(function(user){
    return user.id;
});
console.log(ids);
// FOR IN LOOP
const user = {
    firstName:'John',
    lastName:'Doe',
    age: 55
}
for(let x in user){
    console.log(`${x}: ${user[x]}`);
}