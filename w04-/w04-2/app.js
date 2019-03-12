// document.getElementById()
console.log(document.getElementById('task-title'));
console.log(document.getElementById('task-title').id);
// Get things from the element
let tasktitle = document.getElementById('task-title');
console.log(tasktitle);
// Change styling
tasktitle.style.background='#555';
tasktitle.style.color='#FFF';
tasktitle.style.padding='10px';
//tasktitle.style.display='none';
// Change content
tasktitle.textContent='Task List';
tasktitle.innerText='My Tasks';
tasktitle.innerHTML='<span style="color:red">Task List</span>';
// document.querySelector()
//console.log(document.querySelector('#task-form div'));
//console.log(document.querySelector('#task-form div').className);
document.querySelector('li')
document.querySelector('li').style.color='red';
document.querySelector('ul li').style.color='blue';
document.querySelector('li:last-child').style.color='red';
document.querySelector('li:nth-child(3)').style.color='yellow';
document.querySelector('li:nth-child(4)').textContent='hello';
document.querySelector('li:nth-child(odd)').style.background='#ddd';
document.querySelector('li:nth-child(even)').style.background='#F4F4F4';

let oddlist=document.querySelectorAll('li:nth-child(odd)');
oddlist.forEach(function(list){
    list.style.background='#CCC';
})