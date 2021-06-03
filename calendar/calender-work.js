

function day1(){

var mnth = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];

var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var yr = 2021;



var a = document.getElementById("ip1").value - 1;


var b = document.getElementById("ip2").value;



 

 if( (a >= 12) || (a < 0)){

    alert("Please Enter valid Month");

    return false;
 }

 else if( (b > 31) || (b < 1)){

    alert("Please Enter valid Date");

    return false;
 }

//  else if((mnth[a] ===  1 && (b > 28)) ){

//      alert("Please Enter valid Date");

//      return false;
//  }

  
   

 var c = new Date(yr,a,b);

 var day2 = day[c.getDay()];
 

 

 if(day2 === "Sunday"){

   var day2 = day2.fontcolor("red"); 

   document.getElementById("dat3").innerHTML =  day2;
 }

 else if(day2 === "Saturday"){

   var day2 = day2.fontcolor("red");

   document.getElementById("dat3").innerHTML =  day2;
 }

document.getElementById("dat1").innerHTML = mnth[a];


document.getElementById("dat2").innerHTML = b;

 

 document.getElementById("dat3").innerHTML =  day2;

 



}

