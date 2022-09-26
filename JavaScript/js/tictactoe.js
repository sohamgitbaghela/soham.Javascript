 //To Manage Logic of X and O;
 function checking()
 {
  var myfirstbox=document.getElementById('firstbox').innerText;
  var mysecondbox=document.getElementById('secondbox').innerText;
  var mythirdbox=document.getElementById('thirdbox').innerText;
  var myfourbox=document.getElementById('fourbox').innerText;
  var myfivebox=document.getElementById('fivebox').innerText;
  var mysixbox=document.getElementById('sixbox').innerText;
  var mysevenbox=document.getElementById('sevenbox').innerText;
  var myeightbox=document.getElementById('eightbox').innerText;
  var myninebox=document.getElementById('ninebox').innerText;
  var player1="O";
  var player2="X";

  if(
    (myfirstbox==player1 && mysecondbox==player1 && mythirdbox==player1) || 
    (myfourbox==player1 && myfivebox==player1 && mysixbox==player1) || 
    (mysevenbox==player1 && myeightbox==player1 && myninebox==player1) || 
    (myfirstbox==player1 && myfourbox==player1 && mysevenbox==player1) || 
    (mysecondbox==player1 && myfivebox==player1 && myeightbox==player1) || 
    (mythirdbox==player1 && mysixbox==player1 && myninebox==player1) || 
    (myfirstbox==player1 && myfivebox==player1 && myninebox==player1) || 
    (mythirdbox==player1 && myfivebox==player1 && mysevenbox==player1) )
  {

    document.getElementById('response').innerHTML="Yeah ! Player-1 O has won "
    document.getElementById('firstbox').disabled="true";
    document.getElementById('secondbox').disabled="true";
    document.getElementById('thirdbox').disabled="true";  
    document.getElementById('fourbox').disabled="true";
    document.getElementById('fivebox').disabled="true";
    document.getElementById('sixbox').disabled="true";
    document.getElementById('sevenbox').disabled="true";
    document.getElementById('eightbox').disabled="true";
    document.getElementById('ninebox').disabled="true";
  }

  else if((myfirstbox==player2 && mysecondbox==player2 && mythirdbox==player2) || 
  (myfourbox==player2 && myfivebox==player2 && mysixbox==player2) || 
  (mysevenbox==player2 && myeightbox==player2 && myninebox==player2) || 
  (myfirstbox==player2 && myfourbox==player2 && mysevenbox==player2) || 
  (mysecondbox==player2 && myfivebox==player2 && myeightbox==player2) || 
  (mythirdbox==player2 && mysixbox==player2 && myninebox==player2) || 
  (myfirstbox==player2 && myfivebox==player2 && myninebox==player2) || 
  (mythirdbox==player2 && myfivebox==player2 && mysevenbox==player2) )
  {

    alert("Yeah Player2 "+player2+" won");
    document.getElementById('firstbox').disabled="true";
    document.getElementById('secondbox').disabled="true";
    document.getElementById('thirdbox').disabled="true";  
    document.getElementById('fourbox').disabled="true";
    document.getElementById('fivebox').disabled="true";
    document.getElementById('sixbox').disabled="true";
    document.getElementById('sevenbox').disabled="true";
    document.getElementById('eightbox').disabled="true";
    document.getElementById('ninebox').disabled="true";
  }
  else if(myfirstbox !="" && mysecondbox !="" && mythirdbox != ""  && myfourbox !=""  && myfivebox !="" && mysixbox !=""  && mysevenbox!="" &&    myeightbox!="" && myninebox!=""  )
  {
    alert("Game is Draw ");
    location.reload();
    document.getElementById('response').innerHTML="New Game";
  }
 }

//Function to Reset All Game
    function clearAll()
    {
        
        document.getElementsByClassName('mybox').innerText='';
        //console.log(document.getElementById('firstbox').value);
         location.reload();
       
        //  document.getElementById('firstbox').innerText='';
        // document.getElementById('secondbox').innerText='';
        // document.getElementById('thirdbox').innerText='';
        // document.getElementById('fourbox').innerText='';
        // document.getElementById('fivebox').innerText='';
        // document.getElementById('sixbox').innerText='';
        // document.getElementById('sevenbox').innerText='';
        // document.getElementById('eightbox').innerText='';
        // document.getElementById('ninebox').innerText='';
    }
  //To Manage Logic of X and O;
    var myValue=1;
    var player1="O";
    var player2="X";

  //Start of First Button
 function myMethod1()
   {
    if(myValue==1)
    {
        document.getElementById('firstbox').innerText=player1;
        document.getElementById('firstbox').disabled="true";
        myValue=0;
    }
    else
    {
        document.getElementById('firstbox').innerText=player2;
        document.getElementById('firstbox').disabled="true";
        myValue=1;
    }
   }
   //End of First Button
   //Start of Second Button
   function myMethod2()
   {
    if(myValue==1)
    {
        document.getElementById('secondbox').innerText=player1;
        document.getElementById('secondbox').disabled="true";
        myValue=0;
    }
    else
    {
        document.getElementById('secondbox').innerText=player2;
        document.getElementById('secondbox').disabled="true";
        myValue=1;
    }
   }
   //End of Second Button
   //Start of Third Button
   function myMethod3()
   {
    if(myValue==1)
    {
        document.getElementById('thirdbox').innerText=player1;
        document.getElementById('thirdbox').disabled="true";
        myValue=0;
    }
    else
    {
        document.getElementById('thirdbox').innerText=player2;
        document.getElementById('thirdbox').disabled="true";
        myValue=1;
    }
   }
   //End of Third Button
   //Start of Fourth Button
   function myMethod4()
   {
    if(myValue==1)
    {
        document.getElementById('fourbox').innerText=player1;
        document.getElementById('fourbox').disabled="true";
        myValue=0;
    }
    else
    {
        document.getElementById('fourbox').innerText=player2;
        document.getElementById('fourbox').disabled="true";
        myValue=1;
    }
   }
   //End of Four Button
   //Start of Five Button
   function myMethod5()
   {
    if(myValue==1)
    {
        document.getElementById('fivebox').innerText=player1;
        document.getElementById('fivebox').disabled="true";
        myValue=0;
    }
    else
    {
        document.getElementById('fivebox').innerText=player2;
        document.getElementById('fivebox').disabled="true";
        myValue=1;
    }
   }
   //End of Five Button
   //Start of Six Button
   function myMethod6()
   {
    if(myValue==1)
    {
        document.getElementById('sixbox').innerText=player1;
        document.getElementById('sixbox').disabled="true";
        myValue=0;
    }
    else
    {
        document.getElementById('sixbox').innerText=player2;
        document.getElementById('sixbox').disabled="true";
        myValue=1;
    }
   }
   //End of Six Button
   //Start of Seven Button
   function myMethod7()
   {
    if(myValue==1)
    {
        document.getElementById('sevenbox').innerText=player1;
        document.getElementById('sevenbox').disabled="true";
        myValue=0;
    }
    else
    {
        document.getElementById('sevenbox').innerText=player2;
        document.getElementById('sevenbox').disabled="true";
        myValue=1;
    }
   }
   //End of Seven Button
   //Start of Eight Button
   function myMethod8()
   {
    if(myValue==1)
    {
        document.getElementById('eightbox').innerText=player1;
        document.getElementById('eightbox').disabled="true";
        myValue=0;
    }
    else
    {
        document.getElementById('eightbox').innerText=player2;
        document.getElementById('eightbox').disabled="true";
        myValue=1;
    }
   }
   //Start of Eight Button
   //Start of Nine Button
   function myMethod9()
   {
    if(myValue==1)
    {
        document.getElementById('ninebox').innerText=player1;
        document.getElementById('ninebox').disabled="true";
        myValue=0;
    }
    else
    {
        document.getElementById('ninebox').innerText=player2;
        document.getElementById('ninebox').disabled="true";
        myValue=1;
    }
   }
   //End of Nine Button
