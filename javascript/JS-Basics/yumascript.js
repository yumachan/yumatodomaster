/*
function multiplyBy()
{
    firstnumber =document.getElementById("frame1").value;
    secondnumber =document.getElementById("frame2").value;
    document.getElementById("result").innerHTML =firstnumber*secondnumber;
}  

function divideBy()
{
    firstnumber =document.getElementById("frame1").value;
    secondnumber =document.getElementById("frame2").value;
    document.getElementById("result").innerHTML =firstnumber/secondnumber;
}  
*/

//2019.04.30
/*
var person=function(name,job,birth){
    this.name=name;
    this.job=job;
    this.birth=birth; 
    //koreha ni yoxtute hennkou dekiru 
    this.calculateage=function(){
        console.log(2019-this.birth);//korede gennzai no nennrei }    
      
    };
};
person.prototype.lastname="ikeda";
person.prototype.place="osaka";
//person.prototype.calculateage =function(){
  //  console.log(2019-this.birth);
//};
var yuma=new person("yuma","student",1997,"tabuchi");
var hiroto=new person("hiroto","student",2000);
yuma.calculateage();
hiroto.calculateage();
console.log(yuma.place);
console.log(hiroto.birth);
console.log(yuma.lastname);
console.log(hiroto.lastname);
*/
/*
var personproto={
    calculateage:function(){
        console.log(2019-this.birth);
    }
};

var John=Object.create(personproto);
John.name="John";
John.birth=1998;
John.job="teacher";
console.log(John.birth);

var yuma=Object.create(personproto,{
    name:{value:"yuma"},
    birth:{value:1998},
    job:{value:"web designer"},
});
console.log(yuma.birth);
*/

var years=[1990,1965,1953,2005,1998];

function arrayCalc(arr,fn){
    var arrRes=[];
    for (var i=0; i<arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateage(el){
    return 2019-el;
}

function isFullage(el){
    return el>=18;
}

function maxHeartRate(el){
    if(el>=18 && el<=81){
        return Math.round(206.9-0.67*el);
    }
    return -1;
}

var ages=arrayCalc(years,calculateage);
console.log(ages);

var Fullage=arrayCalc(ages,isFullage);
console.log(Fullage);

var rates=arrayCalc(ages,maxHeartRate);
console.log(ages);
console.log(rates);