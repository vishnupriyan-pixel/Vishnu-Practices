
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
     
     for(var i = 0; i < day.length; i++){

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

        var a = document.getElementById("mnt-s").value - 1;

     var txt1,div1,p1,res1;

     for(var k = 0; k <= a; k++){
         f_day += mnth1[k];
     }

     var find_d = (f_day - 1) % 7;

     if((find_d === 0) || (find_d === 1) || (find_d === 2) || (find_d === 3))
     {
         var l = find_d + 3;
     }

     else if((find_d === 4) || (find_d === 5) || (find_d === 6))
     {
        var l = find_d - 4;
     }



    


     document.getElementById("mnth-name").innerHTML = mnth[a];
     document.getElementById("mnth-name1").innerHTML = mnth[a];

     for (var j = 1; j <= mnth1[a]; j++)
     {
         
        txt1 = document.createTextNode(j);
        div1 = document.createElement("DIV");
        p1 = document.createElement("P");
        p1.appendChild(txt1);

        res1 = div1.appendChild(p1);


        if(j === 1)
        {
            res1.style.gridColumnStart = l + 1;
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

