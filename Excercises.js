//JAVASCRIPT CLASSES
/*
JAVASCRIPT KNOWLEDGE

COMMENTS

A Comment its just a text that you can leave in your line of code , it doesnt do anything and its just left as a reference if needed by using "//" to leave a comment

So it will look like this:
*/
var number = 5 ; // Here is your comment

//MULTILINE COMMENTS

//If you want to reserve a spot to write a lot of comments you cn do so by using /*" "*/

//So it will look like this


/* this is a comments
for writing a lot of stuff
in case we need to leave a note

or we need several things written */

//---------------------------------------------------------************************************---------------------------------------------------------

//DATA TYPES AND VARIABLES
/*
Data is something that is meaningful for the computer, thus, in Javascript there are 7 diff types of data types the you can use

STRING

NUMBER

UNDEFINED

NULL

BOOLEAN

SYMBOL

OBJECT

VARIABLES

VAR

CONST

LET

DECLARING VARIABLES VS ASSIGNING VARIABLES

Variables when declred will look like this
*/
var a;
/*
This means that the Variable "a" has been declared

Now, if we assign a varible it will look like this*/

var b = 2;

//This has been declared and assign at the same time, but it can be declared and ssigned t different times like this

var a;
var b = 2;
a = 7
/*
CONSOLE.LOG

In case you need to check on a variable to see what value this one has assigned you can use console.log

depending on wheter you summon the console log this on sill tell you what was the value of the variable at an specific point through the project

for example you cn write

Console.log(a) and depending where in your project your write it it will tell you the evolution of said variables throught your project

---------------------------------------------------------************************************---------------------------------------------------------

Initializing variables with Assignment operator

Uninitialized variables

VRIABLES CAN EXIST WITHOUT BEING INITIALIZED OR ASSIGNED

Like the example below
*/
// Initialize these three variables

var a;
var b;
var c;

// do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String! ";
/*
A you can see in the top the variables have not been initialized

Ten they can be assigned to any data type like  a number a string or a boolean

// Initialize these three variables
*/
var a = 5;
var b = 10;
var c = "I am a ";

// do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String! ";

//Now s you can see after the code below the variables value will change to this:

a = 6 ;
b = 15 ;
c = "I am a String! ";

//---------------------------------------------------------************************************---------------------------------------------------------

//CASE SENSITIVITY IN VARIABLES

//vriable names and function names are case sensitive and it matters

//So for example here:

//Declarations
var StUdLyCapVaR;
var ProperCamelCase;
var TitleCaseOver;

// Assignments
STUDLYCAPVAR = 10;
PRoperCamelCAse = "A String";
tITLEcASEoVER = 9000;

//You can see that the names bellow do not match the names of the variables declared above therefore the value assigned to them doesnt affect the variable

//If you try to run this you will notice that will throw an error due to the fact that the code below hasnt been declared yet and therefore cannot be assigned any value

//---------------------------------------------------------************************************---------------------------------------------------------

//ADDING NUMBERS

//Adding numberfs is really simple, you just need the + sign in order to do so

//like for example here

var sum = 10 + 10;

//If you use console.log ight after it

var sum = 10 + 10;
console.log("Excercise 1: Suma 10+10 = " + sum)
/*
The result in the console window will show 20

SUBSTRACTING NUMBERS

Substrcting is really simple just by adding the bustrct symbol*/

var diffeence = 15 - 20;

console.log("Excercise 2: Resta 15-20 = " + diffeence);

/*MULTIPLYING AND DIVIDING

Also they use the symbol * and / to multiply or divide*/

var multiply = 15 * 8;

console.log("Excercise 3: Multiplicacion 15*8 = " + multiply);


var divide = 66 / 33;

console.log("Excercise 4: Division 66/33 = " + divide);


/*
INCREMENT NUMBERS

You can increment a number in 2 ways, by using + or using ++ as shown below
*/
var increment = 87;

increment = increment + 1;

console.log("Excercise 5: Increment numbers 87+1 using variables = " + increment);


//Or also you can use

var increment1 = 58

increment1++;

console.log("Excercise 6: Increment numbers 58+1 using ++ = " + increment1);


//DECREASE A NUMBER

//You can also decrease a number the same way as with adding a number but using the minus sign

var decrese = 11;

decrese  = decrese - 1;

console.log("Excercise 7: Decrease numbers 11-1 using variables = " + decrese);

//Or you can also use

var decrease = 11;

decrease--;

console.log("Excercise 8: Decrease numbers 11-1 using -- = " + decrease);


//DECIMAL NUMBERS

//You can also use decimal numbers called "floats"

var ourDecimal = 5.7;

console.log("Excercise 9: Decimal number assignment to variable = " + ourDecimal);


//MULTIPLY  AND DIVID DECIMALS

//This are done the same way as with integers like shown below

var divideDecimal = 2.5 * 4.8;

console.log("Excercise 10: Multiply decimals 2.5*4.8 = " + divideDecimal);


var multiplyDecimal = 5.9 / 6.3;

console.log("Excercise 11: Divide decimals 5.9*6.3 = " + multiplyDecimal);


//FINDING THE REMAINDER

//This is used to find the remainder of ny number and its usually used to know if a number is even in the operation

var remainder;

remainder = 11 % 3;

console.log("Excercise 12: Find remainder of 11 using 11 % 3 = " + remainder);


//ASSIGN AND MAKE OPERATION SHORCUT OR ESCAPE ROUTE

//There might be some instances where you can see a repeating patter that can be shorcut like this one

var a = 3;
var b = 17;
var c = 12;

a = a + 7;
b = 9 + b;
c = c + 7;



//Instead of doing redundant operationsyou can use the operator symbol  +=

var a = 3;
var b = 17;
var c = 12;

a += 7;
b += 9;
c += 7;

console.log("Excercise 13: Assigning variables using += operator = " + a + b + c);


//This can also be done as substraction multiplication and division

var d = 3;
var e = 17;
var f = 12;

d -= 7;
e -= 9;
f -= 7;

console.log("Excercise 14: Assigning variables using -= operator = " + d + e + f);


//---------------------------------------------------------

var g = 3;
var h = 17;
var k = 12;

g *= 7;
h *= 9;
k *= 7;

console.log("Excercise 15: Assigning variables using *= operator = " + g + h + k);

//---------------------------------------------------------

var l = 3;
var m = 17;
var n = 12;

l /= 7;
m /= 9;
n /= 7;

console.log("Excercise 16: Assigning variables using /= operator = " + l + m + n);



//---------------------------------------------------------************************************---------------------------------------------------------

//DECLARE STRING VARIABLES

//String variables are lines of text that can be assigned into a variable and the operator symbol is quotationsmarks ""

var mynameis = "Gerald";

var lastName = "Lopez";

console.log("Excercise 17 Declaring String Variables = " + mynameis + " " +  lastName);


//END OF THE STRING

//The string are characterized by a beggining and ending quotation " hello " but in case that you need to add a string within a string you can use the / simbol right before the last quote in order for Javascript to recognize that said quote is not the last quote of the sentence

//Just like this by using BACKSLASH

var stringStrong = "I m  a \"doubled quote\" inside the \"quted string";

console.log("Excercise 18 Using / operator to unify a multiple dimensional string = " + stringStrong);


/*
Making it a full string

Also in case there are several quotations instead of using /" in order to make a string continue you can also use ' "hellos " world " '
Or also you can make a string with lot of "" and '' inside by using ´´ ´´
*/
var myString =  ' " The world " is doomed  "beyond recognizition" ';

console.log("Excercise 19 Using Single quotes to unify a string: " + myString);





//**************************************************************

//ESCAPE CODES

/*Thee are many lines of codes that you might want to escape like in the example
*/
var stringStrong = "I m  a \"doubled quote\" inside the \"quted string"

/*
//That /" was used to make a string whole

//and those are:

/' Single quote
/" Double quote
// Backslash
/n newline
/r cariage return
/t tab
/b backspace
/f form feed

//These are al the operato commands that can be used in a string



//**************************************************************

CONCATANATE STRING
*/
//You can concatenate strings by adding the + operator between 2 lines os strings jus as shown below

var ourStr = "I come first. " + "I come second. ";

console.log("Excercise 20: Concatenating Strings = " + ourStr);


//You can also concatenate them using the += operator as shown below

var ourStr1 = "I come first. ";
ourStr1 += "I come second. ";

console.log("Excercise 21: Concatenating Strings using += operator = " + ourStr1);


//(its like if operation was

//var ourStr = "I come first. ";
//ourStr = ourStr + "I come second. ";




//**************************************************************

//CONCATANATE STRING WITH VARIABLES

//You can as well concatanate  variable within a string concatanation as shown below

var ourName = "freecodecamp";
var ourStr3 = "Hello, our name is " + ourName + ", how are you?";

console.log("Excercise 22: Concatenating Strings with variables = " + ourStr3);




//**************************************************************

/* FIND LETTER WITH BRACKET NOTATION */

/* You can find n specific letter for an
indexed string using the operation below
by using brackets we can know an specific letter
using the numbers inside the brackets - the frst letter
goes to 0 as JS index first as zero so its
zero indexed */

//Excercise 1

var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName [2];
console.log("Excercise 23: Find letter with bracket notation = " + firstLetterOfFirstName);

//Run code to check on results





//**************************************************************

//Excercise completed

//STRING Character inmutability

/* This will show that string characters are inmutable and cannot
be changed as wel as the correct way to change it */

//Excercise 2

 var myStr = "Jello World";
myStr[0] = "H"; // // FIXME:
console.log("Excercise 24: String character inmutability = " + myStr[0])
//Run code to check on results



/* As you can see it cannot be changed
so you need to use this method */


var myStr1 = "Jello World";
myStr1 = "Hello World"
console.log("Excercise 25: Showing the correct way to change a variable = " + myStr1);
//Run code to check on results






//**************************************************************


/* FIND THE LAST LETTER ON A STRING */

/* This will work even if you dont know how long is
the string */

//Excercise 3

var herName = "Cynthia";
var lastLetterOfFirstName = herName[herName.lenght - 3];
var lastLetterOfFirstName = herName[herName.lenght - 3];

console.log("Excercise 26: Find the las letter on a string(NEEDS REVIEW) = " + lastLetterOfFirstName);



/* This exercise is not complete until I know a certain console
way of specifying but you cn use the .slice to get a
similar result as shown by the research */

//Like This

var member = "my name is Mate";
var last2 = member.slice(-1);

console.log("Excercise 27: Find the las letter on a string USING .SLICE = " + last2)
//Run code to check on results
//This will slice the string to show specific characters
//Excercise completed


//**************************************************************



/* Word Blanks */

/* We are going to attempt to create an smal word game
using strings, this game will show a word and you will fill
the the empty gap with a word of choice this is called
mad libs nd you might get  funny word out of it */

//Excercise 4
/*
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {

var resultados = "";
resultados += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb ;
return resultados;
}*/
//You can change the words here to test the function


//This excercise i not complete as the video shows
//a part that cant be seen of the code and cannot be completed




//**************************************************************



/* STORE MULTIPLE VALUES WITH ARRAYS */

/* arrays allow you to store certin set pieces of data together */
// like the example below

var ourArray = ["John", 23]; // you can keep adding data types like strings or numbers

var myArray = ["Gerald", 29];

console.log("Excercise 28: Store values with Arrays = " + ourArray, myArray);
//Run code to check on results





//**************************************************************


/* NESTED ARRAYS */
// There are some cases where there is going to be
//an array within an array like the example below
//these are called multi dimensional ARRAYS

var multiArray = [["The Universe", 52], ["lolness", 548160]];
var superMultiA = [["Sinergy", 11245], ["Cuchinanimous", 1114254]];

console.log("Excercise 29: Store values with Nested Arrays = " + multiArray, superMultiA);
//Run code to check on results





//**************************************************************

/* ACCESS DATA ARRAYS WITH INDEXES */

/* You can know the index position of an array
just the same way as we did with strings as shown below */

var indexArray = [50, 60, 70];
var dataArray = indexArray[0]; // 50

var indexarray2 = [75, 86, 159];
var dataArray2 = indexarray2[2]; //159

console.log("Excercise 30: Access Arrays with Indexes = " + dataArray, dataArray2);
//Run code to check on results





//**************************************************************


/* MODIFY ARRAYS WITH DATA INDEXES */

/* You can use array indexes to modify arrays
before we tried to modify a string but we couldnt
but we can do modify using brackets with arrays as
shown below */

var modifyArray = [18, 64, 99];
modifyArray[1] = 45; // Now is changed to [18, 45, 99]

var modifyArray2 = [68, 43, 89]; // [68, 143, 89]
modifyArray2[0] = 143;

console.log("Excercise 31: Modify Arrays = " + modifyArray, modifyArray2);
//Run code to check on results






//**************************************************************


/* ACCESS MULTIDIMENSIONAL ARRAYS WITH INDEXES */

/* In case you need to access an specific data within a
multidimensional array just like above where there are
multiple arrays with info */

// you can do so like This

var accessMultiArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
//As you can see in the last part there is a thrid level array meaning its store withing the storage of the storage

var myAccess = accessMultiArray[3][0][2]; // number 12 selected
console.log("Excercise 32: Access MULTIDIMENSIONAL Arrays with Indexes = " + myAccess);
//Run code to check on results

//You need to change the numbers to be able to access the specific array anmd data within
//1 bracket top layer arrays
//2 bracket mid level arrays [13, 14]
//3 Bracket Bot level ARRAYS [10,11,12]






//**************************************************************


/* MANIPULATE ARRAYS WITH PUSH () */

/* You can push an array inside an existing array
using the operator commando push just like shown bellow*/

var pushArray = ["Flanders", "S", "dog"];
pushArray.push(["Liberty", "Captain"]);
console.log("Excercise 33: Manipulate Arrays with Push = " + pushArray);
//Run code to check on results
//You can see the array equals ["Flanders", "S", "dog"["Liberty", "Captain"]]

var pushArray2 = [["Johan", 28], ["Dog", 1]];
pushArray2.push(["Guatemala", "single"]);
console.log("Excercise 34: Manipulate Arrays with Push = " + pushArray2)
// [ [ 'Johan', 28 ], [ 'Dog', 1 ], [ 'Guatemala', 'single' ] ]

console.log("Reusable function test");
reusableFunction()




//**************************************************************

/* MANIPULATE ARRAYS WITH POP () */

/* You can remove data from your array by using the POP
function, you can see that this is a function as
you can notice the () at the end of the word POP this will
remove the data from the array and put in the the
variable "removedFromOurArray"*/

//THIS WILL REMOVE THE FINAL ELEMENT OF AN ARRAY


var removeArray = [1, 2, 3];
var removedFromOurArray = removeArray.pop();
//You can see that removedFromOurArray equals 3
//And removeArray [1, 2]

var removeArray2 = [["Gerald", 29], ["Dog", 1]];
var removedFromOurArray2 = removeArray2.pop();

console.log("Excercise 35: Manipulate Arrays with Pop = " + removeArray, removedFromOurArray, removeArray2, removedFromOurArray2);
//Run code to check on results




//**************************************************************


/* MANIPULATE ARRAYS WITH SHIFT */


/* This is similar to removing an array with POP
the difference is that this time you will be removing
the first element of the array */

//THIS WILL REMOVE THE FIRST ELEMENT OF THE ARRAY

var removeFirstArray = ["Gerald", "A", ["Lopez"]];
var killFirstArray = removeFirstArray.shift();

console.log("Excercise 36: Remove data from array using shift = " + removeFirstArray);
console.log("Excercise 37: Assigning value taken from Array to varible = " + killFirstArray);
//Run code to check on results
/* [ 'A', [ 'Lopez' ] ]
Gerald */





//**************************************************************

/* MANIPULATE ARRAYS WITH unSHIFT */

/* You can push data into the first element of the array
using unshift, this is like the push function
but instead of adding it at the end you will add it at the beggining */

var unshiftArray = ["Gerald", "A", "Lopez"];
unshiftArray.unshift("Geraldo");
console.log("Excercise 38: Manipulate Arrays with Unshift = " + unshiftArray);
/* [ 'Geraldo', 'Gerald', 'A', 'Lopez' ] */

/* You can as well chop one part of the array using shift
and then replacing it with unshift like this */

var unshiftArray2 = ["Gerald", "A", "Lopez"];
unshiftArray2.shift();
unshiftArray2.unshift(["Geraldo"]);
console.log("Excercise 39: Manipulate Arrays with Unshift = " + unshiftArray2);
/* [ 'Geraldo', 'A', 'Lopez' ] */





//**************************************************************


/* WRITE REUSABLE CODE WITH FUNCTIONS */

/* Functions wil allow you to use reusable code
throught JS just like example below */

function reusableFunction() {
  console.log("Hey there, World");
}
console.log("Reusable Function Test:");
reusableFunction();
reusableFunction();
reusableFunction();


/* As you can see a function has been created
to use the console log with a string
each time we want to use this function we can
just paste it in our code and call upon it */







//**************************************************************


/* PASSING VALUES TO FUNCTIONS WITH ARGUMENTS */

/* Parameters are variables that act as place holders for the VALUES
that are to be input to a function when its called */

function functionwithargs(a, b, c) { // The letters in the parenthesis are used to let the function know tht we will be inputing data on it
  console.log(a - b + c);
}
console.log("Excercise 40: Passing values tu functions with arguments(parameters): ");
functionwithargs(10, 5, 8); // Returns 13

//You can see that the data has been input for the parameters above
//This will run the data of the values given operating with the parameters given above





//**************************************************************



/* GLOBAL SCOPE AND FUNCTIONS */


/* Scope refers to the visibility of variables. variables
wich are defined outside of a function block have global scope*/

//Global scope means it can be seen everywhere in your JS code

//Declare variable Here
var myGlobal = 10;


function fun1() {
oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
}
if (typeof oopsGlobal != "undefined") {
  output += " oopsGlobal: " + oopsGlobal;
}
console.log("Excercise 41: Global Scope and Functions: " + output);
}
fun1();
fun2();

/* This example above is to show that VARIABLES
outside the function get global scope for being outside
of a function so the console with show it, if // NOTE:
the function is set so it results in an undefined result *blank* */

/* As you can notice we also declared a variable within a function
if this was set with the "var" statement sa if you use setInterval(function () {
sinside a function it will scope to that function not the global scope
but by doing so without the "var keyword" this becomes global automatically */




//**************************************************************


/* LOCAL SCOPES AND FUNCTIONS */

/* Variables wich are declared within a function have local SCOPES
the little trick used up there by ommiting the "var" character allowed us
to make a variable have a global scope within a function */

//this means variables declared within a function can only
//be seen inside a function

console.log("Excercise 42: Local Scope Example: ");

function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}
myLocalScope();

//console.log(myVar);
//If you try to console log myVar outside of the function
//You will see that returns error: ReferenceError: myVar is not defined
//Now as we greyed the command you can console the log inside the function
//Take off "//" to check console error




//**************************************************************


/* GLOBAL VS LOCAL SCOPE FUNCTIONS */

/* Its possible to have both local and global VARIABLES
using the same name as shown below  */

var outerWear = "T-Shirt";

function myOutfit() {

  return outerWear;
}

console.log("Excercise 43: Global Vs Local Scope functions : " + myOutfit()); // Console returns T-Shirt

/* You can see in the example above that we called upon the variable
outerWear even though this variable was outside of the function
 */


 var outerWear = "T-Shirt";

 function myOutfit() {
   var outerWear = " Size L";
   return outerWear;
 }

 console.log("Excercise 44: Global Vs Local Scope functions: " + outerWear + myOutfit()); // T-Shirt Size L


/* You can see here in this example as well that we can
have 2 variables using the same name one within the function
the other one is outside the function and they both can be logged
*/

var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = " Size L";
  return outerWear;
}

console.log("Excercise 45: Global Vs Local Scope functions: " + myOutfit()); // Size L

//Also you can notice in the second log how if only called
//the function it prioritize that one over the global "outerWear"





//**************************************************************


/* RETURN A VALUE FROM A FUNCTION WITH RETURN */

/* You can return value from a function with a return statement
*/

function minusSeven(num) { //We gave parameter "num" to function
  return num - 7; //You can se we want to return "num" - 7
}

console.log(minusSeven(10)); // We gave data for parameter "10"
//Run code to see results

function timesFive(num) {
  return num * 5;
}

console.log("Excercise 46: Return a value from a function with return: " + timesFive(115));
//Run code to see resultados




//**************************************************************


/* UNDERSTANDING UNDEFINED VALUE RETURNED FROM A FUNCTION */

/* Functions can have return statements but they dont necesarely
have to */

var suma = 0;
function addThree() {
  suma = suma + 3;
}

console.log("Excercise 47: Understanding undefined value returned from a function: " + addThree());

/* As you can see that the return value hasnt been specified
there is nothing to return and logs "undefined" */




//**************************************************************


/* ASSIGNMENT WITH A RETURNED VALUE */

/* We can assign a return value to a variable */

var changed1 = 0; // Variable declared

function change(num) { // parameter assigned
  return (num + 5) / 3; //return 15 / 3 as we gave parameter "num" the value of "10"
}

changed1 = change(10); // we assign a variable with a return value of 15/3=5

console.log("Excercise 48: Assignment with return value: " + changed1); // 5 / Variable has been changed from 0 to returned value 5

//Another example

var assignedValue = 55;

function returnValue(num) {
  return (num + 85) * 6;
}

assignedValue = returnValue(88);

console.log("Excercise 49: Assignment with return value: " + assignedValue);




//**************************************************************


/* STAND IN LINE */

/* In computer science a queue is an abstract daa structure
where items are kept in order, new items can be added to the
back of the queue and old items are taken off from the front of th queue
*/

// JSON.stringify is a way to change an array into a strings
// with this function we are going to place a number within an array


function nextInLine(arr, item){

   arr.push(item)
  return arr.shift();
}

var testArr = [1,2,3,4,5];


console.log("Excercise 50: Moving a queue with pushing and shifting: ");

console.log("before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/* before: [1,2,3,4,5]
1
After: [2,3,4,5,6] */

/* You can see that we chopped the number 1 using shift
and we returned that value and we pushed the number 6
to the end of the array */




//**************************************************************


/* BOOLEAN VALUES */

/* Booleans are data types within JS they only have 2 VALUES
true or false */

/* This is just and on and off swtich where true is on and off is false
s you can see there is no quotation mark in the boolean "false" below */

function welcomeToBolleans() {
  return false;
  return true; // As you can see we cannot return both values is has to be either
  // true or false this way
}

console.log("Excercise 51: Boolean Values: " + welcomeToBolleans());




//**************************************************************


/* USE CONDITIONAL LOGIC WITH IF STATEMENTS */

/* An if statement its used to make a desicion in code, the code "if"
tells the JS to execute the code in the curly braces under the conditions
defined in the parenthesis */

function ourTrueOrFalse(isItTrue) {
  if (isItTrue) { // if the stuff in the parenthesis evaluates to true the code within the curly braces will run
    // This means that, if the "isItTrue" variable is true,it will return "Yes, its true".

   return "Yes, it´s true";
 }
 return "No, it´s false"; // if its not true the second statement will execute
}

console.log("Excercise 52: Using conditional if Statements: " + ourTrueOrFalse(false)) // You can see that it log the value given eiither true or false

//This will be another example using true instead of false.

function trueOrFalse(wasThatTrue) {
if (wasThatTrue) {
  return "Yes, that was true";
}
  return "No, that was false";
}

console.log("Excercise 53: Using conditional if Statements: " + trueOrFalse(true));




//**************************************************************


/* COMPARISON WITH EQUALITY OPERATOR */

/* There are many comparison operators in JS that will return
a boolean of true or false the most common of these is the
"equality" operator and is used in an if statement */

function testEqual(val) {
  if (val == 12) { //You can see that we used the equality operator "=="
    //and assigned to the "if" function
    return "Equal";
  }
  return "Not Equal";
}

console.log("Excercise 54: Comparison with Equality Operator == 10/12: " + testEqual(10)); // You can see that the value given
//is not on equal value of "12" and therefore we programmed the response "Not Equal"

console.log("Excercise 55: Comparison with Equality Operator ==: 12/12 " + testEqual(12)); // You can see in this one we gave the equal value
// therefore will show equal

console.log("Excercise 56: Comparison with Equality Operator ==(Showing that == is not strict): '12'/12 " + testEqual('12')); // You can see in this one we gave the equal value
// Now in this one you can see that the vale "12" is an string value and is not therefore totall equal, but
// there is a way to strict equal a number below




//**************************************************************


/* COMPARISON WITH STRICT EQUALITY OPERATOR */

/* As we saw the equality operator == there is a strict equality operator
that uses the symbols === triple equal */

function testStrict(val) {
  if (val === 3) {
    return "Equal";
  }
  return "Not Equal";
}

console.log("Excercise 57: Comparison with STRICT Equality Operator ===: 3/3 " + testStrict(3));
console.log("Excercise 58: Comparison with STRICT Equality Operator(Showing Strictness) ===: '3'/3 " + testStrict('3'));




//**************************************************************


/* PRACTICE COMPARING DIFFERENT VALUES */

/* This will be a review as shown below you can see the comparison between strict
and not strict as well as how if statements work within a function */


function compareEquality(a, b) {
  if (a === b) {
    return "Strictly Equal";
  }
  else if (a == b) {
    return "Equal but not strict";
  }
  return "Not Equal";
}

console.log("Excercise 59: REVIEW of comparing values: '33'/'33' " + compareEquality('33', '33'));
console.log("Excercise 60: REVIEW of comparing values: 45/'33' " + compareEquality(45, '33'));
console.log("Excercise 61: REVIEW of comparing values: 33/'33' " + compareEquality(33, '33'));




//**************************************************************


/* COMPARISON WITH INEQUALITY OPERATOR */ 
