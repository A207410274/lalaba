// FUNCTION DECLARATIONS
function greet(firstName='John',lastName='Doe'){
return 'Hello ' + firstName +' '+ lastName
};
console.log(greet(''));
console.log(greet('Dave','Smith'));
// FUNCTION EXPRESIONS
const square = function(x=2) {
    return x*x;
}
console.log(square(4));
// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
(function greeting(){
    console.log('IIFE Ran. ');
})();

(function greet(firstName='John',lastName='Doe'){
    console.log('Hello ' + firstName +' '+ lastName);
})('Dave','AAAA');

// PROPERTY METHODS
const todo = {
    add: function () {
        console.log('Add todo ...');
    },
    edit: function (id) {
        console.log(`Edit todo ${id}`)
    }
}
todo.delete = function (id) {
    console.log(`Delete todo od ${id}`);    
}


todo.add();
todo.edit(555);
todo.delete(666);