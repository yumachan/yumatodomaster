//Exercise

//2
/*
var x=5;
x=x+2;
console.log(x);
*/
//3
/*
var i;
var i=(2004);
if (i%4 == 0 && i%100 == 0){
  console.log(i  + " is not a leap year");
}else if (i%4 == 0){
  console.log(i + " is a leap year");
}else{
 console.log(i + " is not a leap year");
}
*/
 //4


/*
 function leap(year){
     if(year/4 ==0 && year/100 ==0){
         var noturuu;
     }else if (year/4 ==0){
         var uruu;
     }else{
         var uruu;
     }
 } for(i=2014; i<=2050;i++){

 }

 
/*
 console.log(`------------`);
 for (var year =2014; year<=2050; year++)
{
    var d =new Date(year,0,1);
    if (d.getDay() ===0)
    console.log("1st january is being a sunday" + year);
}
console.log(`-------------`);
*/
 /*
 for (i ==2014; i<=2050; i++){
     if()
     if(i%4 == 0 && i%100 == 0){
        console.log
      }else if (i%4 == 0){
        
      }else{
      
      }
      
 }
 /*
 
 }if(c/7 ==0){
     console.log(Tuesday);
 }else if(c/7 ==1){
     console.log(Monday;)
 }else if (c/7 ==2){
     console.log(Wednesday);
 }else if (c)
  */

 //5

/*
var x=8,y=2;
console.log(x+y);
console.log(x/y);
*/



//6
/*
function cToF(celsius)
{
    var cTemp =celsius;
    var cToFahr =cTemp *9/5+32;
    var message =cTemp+`BC is`+ cToFahr +`BF.`; 
    console.log(message);
}
function fToC(fahrenheit)
{
    var fTemp = fahrenheit;
    var fToCel =(fTemp-32)*5/9;
    var message =fTemp+`BF is`+fToCel+`BC.`;
    console.log(message);
}
cToF(60);
fToC(45);
/*
var i;
i=(27);
console.log(i+273);
*/

//7
 /*
    var x=18;  
    if(x>=13){
        var double=(x-13)*2;
        console.log(double);
    }else{
        console.log(13-n);
    }

 */

 //8
/*
 var compute=function(x,y){
     switch (x,y){
         case x==y:
         return x*3;
         default:
         return x+y;
         }
 }
 console.log(compute(4,4));
 */

 //9
/*
var check=function(x,y){
   if (x==50 || y==50){
    console.log(true);
   } else if (x+y>=50){
    console.log(true);
   }else{
    console.log(false);
   }
} 
console.log(check(1,50));
*/


//10


//Excercise 2

//1
/*
var x,y;
x=-1;
y=4;
if (x<0 && y<0){
    console.log("both is negative");
}else if(x<=0 && y>=0){
    console.log("x is negative,y is positive");
}else if(y<=0 && x>=0){
    console.log("y is negative,x is positive");
}else{
    console.log("both is positive");
}
*/

//2
/*
var fruits=["banana","apple","orange"];

fruits.pop();

console.log(fruits);
*/

//3
/*
var fruits=["banana","apple","orange"];

fruits[0]="grapes";
fruits[3]="watermelon"

console.log(fruits);
*/

//4
/*
var fruits=["banana","apple","orange"];

fruits.unshift("grapes");
fruits.push("watermelon");
//unshift is flontside(left)
//push is backside(right)
console.log(fruits);
*/
//5

/*
var x;
x=4;
if(x>=0){
    console.log(x*3);
    console.log(x*7);
}else{
    console.log();
}
*/

//6

/*
var js=["java","php","python"];
if (js[0]=="java"){
    console.log("true");
}else{
    console.log("false");
}
*/
/*
var js=["java","php","python"];
switch (js){
    case js[0] =="java":
    console.log("true");
    break;
    default:
    console.log("false");
    break;
}

I want to ask sumit */

//7
/*
var x,y;
x=51;
y=67;

if (x<=99,x>=50 && y<=99,y>=50){
    console.log("true");
}else{
    console.log("false");
}
*/

//8
/*
var x,y,z;
x=14;
y=8;
z=36;

if (x>=y && x>=z){
    console.log("x is largest");
}else if(y>=x && y>=z){
    console.log("y is largest");
}else{
    console.log("z is largest");
}

*/

//Exercise 3

//1
/*
var x,y;
x=33;
y=18;

if (x== 15 || y== 15){
    console.log(true);
}else if(x+y==15){
    console.log(true);
}else if(x-y==15 || y-x==15){
    console.log(true);
}else{
    console.log();
}
*/

//2
/*
var x,y;
x=33;
y=21;

if (x<0 || y<0){
    console.log("negative integer");
}else if(x%7==0 &&y%7==0){
    console.log("a");
}else if(x%7==0 &&y%11==0){
    console.log("b");
}else if(x%11==0 &&y%7==0){
    console.log("c");
}else if(x%11==0 &&y%11==0){
    console.log("d");
}            
else if(x%7==0 &&( y%7!==0 ||y%11!==0)){
    console.log("x is multiple of 7");
}else if(x%11==0 &&( y%11!==0 ||y%7!==0)) {
    console.log("x is multiple of 11");
}else if(y%7==0 &&( x%7!==0 ||x%11!==0)){
    consoel.log(" y is multiple of 7");
}else{//(y%11==0 &&( x%7!==0 ||x%11!==0))
    console.log("y is multiple of 11");
}
*/

//3
/*
var fruit=["apple","banana","orange","peach"];
fruit.reverse();
console.log(fruit);
*/

//4
/*
var fruit=["apple","banana","orange","peach"];
fruit.pop();
fruit.reverse();
console.log(fruit);
*/

//5
/*
var fruit=["apple","banana","orange"];
if (fruit.length==2){
    console.log("length is 2");
}else if(fruit.length==1 || fruit.length==3){
    console.log("length is 1 or 3");
}
*/

//6

var test=["30","40","30","40"];
if (test =0){
    
}


//7
/*
var num=["3","5","8","25"];
var x,y;
x=66;
y=-1;
if (x>=0){
   num.push(x);
}else if(y>=0){
   num.push(y);
}else{
   console.log();
}

console.log(num);
*/
