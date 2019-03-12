// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
alert('hello world');
// Prompt
const input =prompt('Enter name');
alert(input);
// Confirm
if(confirm('are you sure?')){
    console.log('yes');
}else{
    console.log('no');
}
// Location Object
console.log(window.location);
console.log(window.location.hostname);
console.log(window.location.href);
// Redirect
//window.location.href='http://google.com';
// History Object
window.history.go(-1);
// Navigator Object
console.log(window.navigator.platform);
console.log(window.navigator.appVersion);
console.log(window.navigator.vendor);