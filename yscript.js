/*var calclatetotal =function(num){
    var sum =0;
    for (var i=0; i<length.num; i++){
        sum +=num[i];
    };
    return sum;
}
*/
//if (onclick=)
/*
function insert(num){
    document.textview.form.value=document.text.form.value+num;
}

function clean(){
    document.textview.form.value="";
}

function back(){
    var txt=document.textview.form.value;
    document.textview.form.value=txt.substring(0,txt.length-1);
}

function equals(){
    var txt=document.textview.form.value;
    if (txt){
        document.textview.form.value=document.textview.form.value;
    }else{
        document.textview.form.value='ERROR';
    }
}
*/
function insert(num){
    document.form.textview.value=document.form.textview.value+num;
  }
  
  function equals(){
    var txt=document.form.textview.value;
    if(txt)
    document.form.textview.value=eval(txt);
    else
      document.form.textview.value='ERROR'
      
  }
  
  function clean(){
    document.form.textview.value="";
  }
  
  function back(){
    var txt=document.form.textview.value;
    document.form.textview.value=txt.substring(0,txt.length-1);
  }