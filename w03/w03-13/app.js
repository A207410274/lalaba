// Number to string {number & sum}
val =String(555);
console.log("String(555) =",val);
val =String(8+8);
console.log("String(8+8) =",val);
// Bool to string
val =String(true);
console.log("String(true) =",val);
// Date to string
val = String(new Date());
console.log("String(new date) =",val);
// Array to string
val = String([1,2,3,4]);
console.log('String([1,2,3,4]) =',val);
// toString() {number & bool}
val = (5).toString();
console.log('(5).toString =',val);

val =(true).toString();
console.log("(true).toString =",val);
// String to number {char & bool & null & string & array}
val =Number('8');
console.log("Number('8') =",val);

val =Number(true);
console.log("Number('true') =",val);

val =Number(false);
console.log("Number('false') =",val);

val =Number(null);
console.log("Number('null') =",val);

val =Number('hello');
console.log("Number('hello') =",val);

val =Number('[1,2,3]');
console.log("Number('[1,2,3]') =",val);

// parseInt & parseFloat
val =parseInt('100.30');
console.log("parseInt =",val);

val =parseFloat('100.30');
console.log("parseFloat =",val);
// Output {consol val & typeof val & val.length & val.to Fixed(2)}
console.log(val);

console.log(typeof val);

val='hello';
console.log('length =',val.length);

val=100.123;
console.log('toFixed(2) =',val.toFixed(2));

const val1 = String(5);
console.log("vall = String(5)");
const val2 = 6;
console.log("val2 = 6");
//consol.log {sum & typeof sum}
const sum = Number(val1 + val2);
console.log("Number(val1+val2) =",sum);
console.log(typeof sum);