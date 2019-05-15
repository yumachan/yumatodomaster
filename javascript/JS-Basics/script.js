/*
console.log("hello i am yuma");
console.log("yuma");
console.log("i am from japan");
console.log("i am 21 years old");

var firstName="yuma";
var bisleri="yuma's water";
console.log(bisleri);

console.log(firstName);

var lastname="nihonjin";
var age="21";//age is int
var fullage="true";
console.log(fullage);
console.log(age);
*/

/*
var job;
console.log(job);
*/
/*
job="teacher";
console.log(job);
var sumit="sumit is a good teacher";
*/
/*
var _3years=3; 
var $3years="john and mark";
console.log(_3years);
*/
/*
var firstName="sumit";
var age="23";
console.log(firstName + " " + age);

var job,ismarried;
job="teacher";

//is married=false;



var job,isMarried,student,age,firstName;
firstName="sumit";
student="yuma";
job="teacher";
age="23";
isMarried="false";

console.log(
    firstName +
    " is a " +
    age +
    " years old " +
    isMarried +
    " his student's name is " +
    student
);

var job,firstName,isMarried;
firstName="yuma";
ismarried="true";
var age="21";
age="twenty one";
job="student";

alert(
    firstName +
    " is a " +
    age +
    " years old " +
    job +
    " Is she Married? " +


    ismarried  
);

var lastname=prompt("what is his last name?");
console.log(firstName + " " + lastname);
*/
/*
var year,yearSumit,yearYuma, now;
now =2019;
ageSumit=23;
ageYuma=21;
yearYuma=now-21;
yearSumit=now-23;
console.log(yearSumit);
console.log(2019-22);

console.log(now + 2 );
console.log(now * 2 );
console.log(now / 10);
*/
/*
var ageSumit=23;
var ageYuma=21;

var sumitolder=ageSumit > ageYuma;
console.log(sumitolder);
var sumitolder=ageSumit < ageYuma;
console.log(sumitolder);

//type of opereator

console.log(typeof sumitolder);
console.log(typeof ageYuma);
console.log(typeof "Sumit is good teacher");
var x=21;
console.log(typeof x);

//operater
var now=2019;
var yearSumit=1996;
var fullage=18;
//multiple ooerater
var fullage=now-yearSumit>=fullage;
console.log(fullage);
//grouping

var ageSumit=now-yearSumit;
var ageyuma=21;
var average = (ageSumit + ageYuma) / 2;
console.log(average);
  */
 /*
    var x,y;
    x=y=(3 + 5)*4-6;
    console.log(x,y);
    


    //more operster

    x *= 2;//x=x*2
    console.log(x);

    x += 10;//x=x;10
    console.log(x);

    x = x+1;
    x +=1;
    x++; //x=x+1;
    console.log(x);
*/
/*
var firstname="yuma";
var civilstatus="married";
/*
if(civilstatus == "married"){
  //==equal operator if (true/false){body of it}
  //body of it
  console.log(firstname + " is married! "); 
}
*//*
if (civilstatus =="married"){
  console.log(firstname + " will hopelly marry soon");



var ismarried =true;
if (ismarried){
  console.log(firstname + " is married");
}else{
  console.log(fitstname + "will hopefully marry soon");
}
//
//boolean logics
//
/*
var age =16;
age>=20; //false
age<30;  //true
!(age<30); //false

age>=20 && age<30; //false t&&t=t t&&f=f f&&t=f f&&f=f
age>=20 || age<30; //true  t||t=t t||f=t f||t=t f||f=f

var firstname="yuma";
var age =21;
if (age<13){
  console.log(firstname+ " is a girl");
}else if(age>=13 && age<20){
  //between 13 and 20 === 13 and age 20
  console.log(firstname + " is teenager");
}else if(age>=20 && age< 30){
  console.log(firstname +" is young woman");
}else{
  console.log(firstname+ " is woman");
}*/
/* 
var firstname ="yuma";
var age="16";

//ternanry operater
//age>=20 // test condition ? t f
 //       ? console.log(firstname + " drinks beer")
 //       : console.log(firstname + "drinks juice")
 
 var drink =age>=18 ? "beer": "juice";
 console.log(drink);


var score="8";

var test=score >=80 ?"good":"bad";
console.log(test);
*/
/*
var firstname="yuma"
var job ="driver";
switch(job){
  case "teacher":
  console.log(firstname + "teaches kids how to code");
  break;
  case "driver":
  console.log(firstname + "drives an uber in osaka");
  break;
  case "designer":
  console.log(firstname + "design beautiful wewbsite");
  break;
  case "dancer":
  console.log(firstname + "is dencing very well");
  break;
  default:
  console.log(firstname + "does something else");
}*/
/*
var age=14;
switch(true){
  case age<13:
  console.log(firstname + " is a boy");
  break;
  case age>=13 && age<20:
  console.log(firstname + "is a teenager");
  break;
  case age>=20 && age<30:
  console.log(firstname + "is a young man");
  break;

  default:
  console.log(firstname + " is a man ");
  
}*/
/*
var height;
//height ="twenty one";
height =0;
if (height || height ==0){
  console.log("variable is defined");
}else{
  console.log("vairable has not been defined");
}
*/

var height=23;

/*
if(height == 23){//if to onagi
  console.log("The == operaror does type coercion");
}
*/
/*
if(height ===23){//check the type
  console.log("The operetor does type coercion");
}
*/
//function
//
/*
function calculateage(birthyear){
  return 2018-birthyear;
} 


var agesumit = calculateage(1996);
var ageyuma = calculateage(1998);
var agesusumu = calculateage(1992);
console.log(agesumit,ageyuma,agesusumu);


function yearsuntilretirement(year,firstname){
  var age= calculateage(year);

  var retirement =65- age;
  console.log(firstname + " retires in " + retirement +"years"); 
}

yearsuntilretirement(1996,"sumit");
yearsuntilretirement(1998,"yuma");
yearsuntilretirement(1992,"susumu");
*/

//var addyuma = function add(firstno,secondno){}
//console.log(addyuma(4,6))
/*
var whatdoyoudo = function(job, firstname){
  switch (job){
    case "teacher":
    return firstname + " teaches kids how to code";
    case "driver":
    return firstname + " drivers a car in japan";
    case "designer":
    return firstname + " designs beautiful websites";
    default :
    return firstname +" does something else";
  }
};

console.log(whatdoyoudo("teacher","sumit"));
console.log(whatdoyoudo("designer","jane"));
console.log(whatdoyoudo("retired","mark"));

*/
//
//initialize new array
//
/*
var names= ["sumit", "yuma","susumu"];

//var names=new Array("sumit, yuma, susumu");//object of array
var ages=[23,21,28];
var years=new Array(1996,1998,1992);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

console.log(ages[0]);

//console.log(names.length);

//mutate array data

names[1] ="hiromi";
//names[5] ="mary";

names[names.length] ="Mary";
names[names.length] ="kota";
 console.log(names);
 */

 //differnt data type
/*
 var sumit =["sumit","choudhary", 1996,"designer",false];
sumit.push("blue");
 sumit.unshift("Mr");
 console.log(sumit); //pop is right vanish  shift is left vanish
 sumit.pop();
 sumit.pop();
 sumit.shift();
 console.log(sumit);

 console.log(sumit.indexOf(1996));
 console.log(sumit.indexOf("yuma"));//-1
 console.log(sumit.indexOf(23));

 var isdesigner =
  sumit.indexOf("designer")===-1
  ? "sumit is not a designer"
  : "sumit is a designer"; //-1 ha  yousoganimononikaesarerumomo
                           // tumari -1 nara yousoganai designer deha nai touikoto

  console.log(isdesigner);
*/
/*
var sumit ={
  firstname:"yuma",
  lastname:"tabuchi",
  birthyear:1998,
  family:["hiroto", "miho","toshi"],
  job:"student",
  ismarried:false
};

console.log(sumit["firstname"]);
console.log(sumit["lastname"]);
console.log(sumit.family);
var x ="birthyear";
console.log(sumit[x]);


//mutated object

sumit.job ="designer";
sumit["ismarried"]=true;
console.log(sumit);

//new object syntax

var yuma =new Object();
yuma.name ="yuma";
yuma.birthday = 1998;
yuma["lastname"] ="tabuchi";
console.log(yuma);

var sumit={
   firstname:"sumit",
   lastname:"choudgary",
   birthyear:1999,
   family:["amit","mark","bob"],
   job:"teacher",
   ismarried:false,
   calcage:function(birthyear){
    age=2018-this.birthyear;
    return age;
    //return 2018-birthyear
   }
};

console.log(sumit.calcage());

//console.log(sumit.age);

*/

//loops and iteration
/*
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

for (var i=0; i<10; i++){
  //i +=2
  console.log(i);
}

var sumit=["sumit","smith",1990,"designer",false,"blue","yuma","osaka"];
console.log(sumit[0]);
for (var i=0; i<sumit.length; i++){
  console.log(sumit[i]);
}
*/
/*
var i=0;
var sumit=["sumit","smith",1990,"designer",false,"blue"];
while(i<sumit.length){
  console.log(sumit[i]);
  i++;
}
*/

// var sumit =["sumit", "anish",1990,"designer",false,"blue"];
//for(var i = 0; i < sumit.length; i++){
//  if (typeof sumit[i] !=="string")continue;
//  console.log(sumit[i]);
  
//}
/*
for(var i=0; i<sumit.length; i++){
  if (typeof sumit[i] !=="string")break;
  console.log(sumit[i]);
}

*/
/*
var Person =function(name,yearOFbirth,job,lastname){
  this.name=name;
  this.yearOFbirth =yearOFbirth;
  this.job=job;
  this.lastname = lastname;
  this.calculateAge= function(){
    console.log(2018-this.yearOFbirth);
  };
};
//Person.prototype.lastname="tabuchi";
Person.prototype.place="india";
Person.prototype.address="17th main road koramangala spiceup";

Person.prototype.calculateAge =function(){
  console.log(2018-this.yearOFbirth);
};


var sumit=new Person("sumit",1996,"teacher","chooudary");
var yuma=new Person("yuma",1998,"website designer","tabuchi");
var mark=new Person("Mark",1948,"retired");

sumit.calculateAge();
yuma.calculateAge();
mark.calculateAge();


console.log(sumit.address);
console.log(sumit.lastname);
console.log(yuma.lastname);
console.log(mark.lastname);
console.log(mark.place);

*//*
var personproto ={
  calculateage: function(){
    console.log(2018-this.yearOFbirth);
  }
};

var John = Object.create(personproto);
John.name="John";
John.yearOFbirth="1998";
John.job="teacher";

console.log(John.yearOFbirth);

var yuma= Object.create(personproto,{
  name:{value:"yuma"},
  yearOFbirth:{value:1998},
  job:{value:"web designer"}
});

console.log(yuma.yearOFbirth);
*/
/*
var a=23;
var b=a;
a =46;
console.log(a); //46
console.log(b); //23
// kochiraha sorezore kobetude eikyou

//object
var obj1 ={
  name:"yuma",
  age:21
}

// kochiraha onaji eikyou wo ukeru
var obj2=obj1;
obj1.age =30;
console.log(obj1.age);
console.log(obj2.age);
*/
/*
var age=27;
var obj={
  name:"sumit",
  city:"India",
  address:"spiceup"
};

function change(a,b){
  a =30;
  b.city="San francisco";//obj dake
}

change(age,obj);
console.log(age);
console.log(obj.city);
console.log(obj.address);
*/
/*
var years =[1990,1965,1953,2005,1998];

function arrayCalc(arr,fn){
  var arrRes=[];
  for (var i=0; i<arr.length; i++){
    arrRes.push(fn(arr[i]));
  }

  return arrRes;
}

//simple function
function calculateage(el){
  return 2019-el;
}

function isFullage(el){
  return el >=18;
}//18 ijyouka douka shiraberu,kono el ha 2019-el desu

function maxHeartRate(el){
  if (el >=18 && el <= 81){
    return Math.round(206.9-0.67*el);
  }
  return -1;
}
// el ha element nokotonanode el=years dearu
//tumari years tokaitemoii 
var ages =arrayCalc(years,calculateage);
console.log(ages);

var Fullage=arrayCalc(ages,isFullage);
console.log(Fullage);

var rates =arrayCalc(ages,maxHeartRate);
console.log(ages);
console.log(rates);
*/

/*
function retirement(retirementage){
  var a="years left until retirement";
  return function(yearOFbirth){
    var age=2018-yearOFbirth;
    console.log(retirementage-age+a);
  };
}


function interviewQuestion(job){
  if (job =="designer"){
    return function(name){
      console.log(name+" , can you please explain what UX design is?? " );
    };
  }else if(job =="teacher"){
    return function(name){
      console.log("what subject do you teach ," +name +"? ");
    };
  }else if(job =="engineer"){
    return function(name){
      console.log(name +" , what kind of technology did you learn? ");
    };
  }else{
    return function(name){
      console.log("Hello"+ name + " , what do you do? ");
    };
  }
}

function retirement(retirementage){
  var a="years left until retirement";
  return function(yearOFbirth){
    var age=2018-yearOFbirth;
    console.log(retirementage-age+a);
  };
}


//var teacherQuestion = interviewQuestion("teacher");
//var designerQuestion = interviewQuestion("designer");
//var engineerQuestion =interviewQuestion("engineer");
//designerQuestion("yuma");
//engineerQuestion("Hiroto");

interviewQuestion("designer")("yuma");
//teacherQuestion("Sumit");
//designerQuestion("Anish");
//designerQuestion("Manish");
//designerQuestion("Hiromi");




function retirement(retirementage){
  var a="years left until retirement";
  return function(yearOFbirth){
    var age=2018-yearOFbirth;
    console.log(retirementage-age+a);
  };
}


var retirementUS =retirement(66);
retirementUS(1990);

var retirementgermany=retirement(65);
var retirementiceland=retirement(67);
retirementgermany(1995);
retirement(1996);

//retirement(66)(1990);
*/

/*
//20190506
//ES5
var name5="yuma";
var age5=21;
name5 ="yuma tabuchi";
console.log(name5);

//ES6
const name6="james smith"; //const is teisuu
let age6=26;               //let is hennsuu
age6 = "56";
console.log(age6);
*/

//ES5
/*

function driverlicence(passedtest){
  if(passedtest){
    var firstname="John";
    var yearOfbirth=1990;
    console.log(firstname+" , born in" + yearOfbirth +" , is now offically allowed to drive");
  }
//let firstname ="yuma";
//const yearOfbirth =1997;
console.log(firstname+ " , born in" +yearOfbirth +  "is now offically allowed to drive");
 
}
driverlicence(true);
*/
/*
//ES6


function driverlicence(passedtest){
  if (passedtest){
    let firstname = "john";
    const yearOfbirth =1990;
    console.log(firstname+ " , born in "+ yearOfbirth+" , is now officially allowed to drive");
    }
let firstname = "yuma";
const yearOfbirth =1990;
console.log(firstname+ " , born in "+ yearOfbirth+" , is now officially allowed to drive");


}
driverlicence(true);
*/
/*
var i = 23;
for(var i = 0; i < 5; i++){
  console.log(i);
}
console.log(i);


//ES6
{
  var a = 10;
  //const a=45;
  var b = 2;
  var c = 3;
}
//var b =9;
console.log(a + b);
console.log(c);

//ES5

(function(){
  var c =3;
})();
*/

//ES6,strings
/*
let firstname ="yuma";
let lastname="tabuchi";
const yearOfbirth =1990;
function calcAge(year){
  return 2018-year;
}

//ES5

console.log(
  "this is "+
  firstname+
  ""+
  lastname+
   ". He was born in "+
  yearOfbirth+
  ". Today , she is"+
  calcAge(yearOfbirth)+
  "years old"
);

//ES6

console.log(
  `this is ${firstname}${lastname}.she was born in ${yearOfbirth}. Today is ${calcAge(
    yearOfbirth
  )}years old`
);
/*

//more sring method

const n=`${firstname}${lastname}`;
console.log(n.startsWith("y"));
console.log(n.endsWith("t"));
console.log(n.includes("t"));
console.log(`${firstname}`.repeat(5));
*/

//arrow function

const years =[1990,1961,1987,1937];

//ES5
/*
var ages5= years.map(function(el){
  return 2019-el;
});

console.log(ages5);
*/
//ES6
/*
let ages6 =years.map(el =>2019-el);
console.log(ages6);
ages6 =years.map((el,index) =>`Age element ${index+1}:${2019-el}.`);
console.log(ages6);

ages6 = years.map((el,index)=>{
  const now = new Date().getFullYear();
  const age=now-el;
  return `Age element ${index +1}: ${age}.`;
});

console.log(ages6);
*/
//destructuring

//ES5
/*
var john =["john",21];
var name=John[0];
var age=John[1];
*/
//Es6
/*
const [name,age] = ["John",21];
console.log(name);
console.log(age);
*/
/*
const obj= {
  firstname: "yuma",
  l
lastname:"tabuchi"
};const {firstname, lastname}=obj;
console.log(firstname);
console.log(lastname);

const{firstname: a, lastname: b} =obj;
console.log(a);
console.log(b);
*/

function calcAgeretirement(year){
  const age =new Date().getFullYear()-year;
  return [age,65-age];
}

const [age2,retirement]=calcAgeretirement(1997);
console.log(age2);
console.log(retirement);

