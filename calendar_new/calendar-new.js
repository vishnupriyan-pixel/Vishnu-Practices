
function month_dis(){


    reset_all();

    monthVal();

    days_form();

    date_form();

    

   
}


    var mnth = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
    
   var day =  ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

   var mnth1 = [31,28,31,30,31,30,31,31,30,31,30,31];

   var yr = 2021;

   var dat = 1;

   function monthVal(){

    var a = document.getElementById("mnt-s").value - 1;
    

    if( (a >= 12) || (a < 0)){
   
        alert("Please Enter valid Month");
    
        return false;
     }

    }


    function days_form(){

    var mnth = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
    
   var day =  ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

   var mnth1 = [31,28,31,30,31,30,31,31,30,31,30,31];

   var a = document.getElementById("mnt-s").value - 1;

   var yr = 2021;

   var dat = 1;

    var day1,div,p,txt,res;
     
    for(var i = 0; i < day.length; i++)
    {

        day1 = day[i];

        txt = document.createTextNode(day1);

        div  = document.createElement("DIV");

        p = document.createElement("P");

        p.appendChild(txt);

        res = div.appendChild(p);

        if( (day1 === "Sunday") || (day1 === "Saturday"))
        {
            res.style.color = "red";
        }

        document.querySelector(".mnt-order").appendChild(res);
    

    //    alert(day)
     }

     document.querySelector(".mnt-order").style.border = "1px solid black";
    }


     /////////////

     function date_form(){

        var mnth = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
    
        var day =  ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     
        var mnth1 = [31,28,31,30,31,30,31,31,30,31,30,31];
     
        var yr = 2021;
     
        var dat = 1;

        var f_day = 0;

        var a = document.getElementById("mnt-s").value;

        var c = a - 1;

        var txt1,div1,p1,res1;

   

     for(var k = 0; k < a; k++)
     {
        f_day += mnth1[k];
        
     }
   
     if( a == 1){

      // alert("gtt");
        var g = (((f_day - 1) % 7) + 3);
      // alert(g);   
        var h = day[g];
      // alert(h);
     }



     

     else if(a == 2){
      //   alert("guu");
        var g =((f_day - 1) % 7) - 1;
      //   alert(g); 
        var h = day[g];
      //   alert(h);
     }

     else if(a == 3 ||  a == 8) {
        var g = ((f_day - 1) % 7) - 4;
      //   alert(g);
        var h = day[g];
      //   alert(h);
     }

     else if(a == 4){
      var g = ((f_day - 1) % 7) + 4;
      // alert(g);
      var h = day[g];
      // alert(h);
     }

     else if(a == 5 || a == 7 || a == 10 || a == 12){
      var g = ((f_day - 1) % 7) + 3;
      // alert(g);
      var h = day[g];
      // alert(h);
     }

     else if(a == 6 || a == 9 || a == 11){
      var g = ((f_day - 1) % 7) - 3;
      // alert(g);
      var h = day[g];
      // alert(h);
     }


     document.getElementById("mnth-name").innerHTML = mnth[c];
     document.getElementById("mnth-name1").innerHTML = mnth[c];

     for (var j = 1; j <= mnth1[c]; j++)
     {
         
        txt1 = document.createTextNode(j);
        div1 = document.createElement("DIV");
        p1 = document.createElement("P");
        p1.appendChild(txt1);

        res1 = div1.appendChild(p1);



        if(j == 1) 
        {
            res1.style.gridColumnStart = g + 1;
        }

       
       

        document.querySelector(".mnt-order1").appendChild(res1);

     }

        document.getElementById('mnt-s').value = '';
    }

    function reset_all(){

     

     document.querySelector(".mnt-order").innerHTML = '';


     document.querySelector(".mnt-order1").innerHTML = '';
     

    }

    //  document.getElementById("mnth-name").innerHTML = mnth[a];

    // document.getElementsByClassName('mnt-order'). innerHTML = day2;

