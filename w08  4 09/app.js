// document.getElementsByClassName
let items =  document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[1].textContent = 'Hello';
items[2].innerHTML = '<h4> hello </h4>';

items = document.querySelector('ul').getElementsByClassName('collection-item');
let lis = document.getElementsByTagName('li');

console.log(lis[0]);
// document.getElementsByTagName
let lis2 = Array.from(lis);
lis2.reverse();
lis2.forEach(function (li,index){
    console.log(li.className);
    li.textContent = `${index}: Hello`;
})



// document.querySelectorAll
item = document.querySelectorAll('ul.collection li.collection-item');
item.forEach(function(li, index)
{
    li.style.background ='#ccc';
}
)
const lisOdd = document.querySelectorAll('li:nth-child(odd)');
lisOdd.forEach(function(li){
    li.style.background ='#ccc';
})
const lisEven = document.querySelectorAll('li:nth-child(even)');
for(let i=0; i<lisEven.length; i++){
    lisEven[i].style.background ='#ccc';
}