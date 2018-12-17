 var pawn=new Array(4);
 pawn[0]="Green";
 pawn[1]="Red";
 pawn[2]="Blue";
 pawn[3]="Yellow";
   var clicked=0;
    var num;
    var onboard = {
      Redpawn1: 0, Redpawn2: 0, Redpawn3: 0, Redpawn4: 0,
      Bluepawn1: 0, Bluepawn2: 0, Bluepawn3: 0, Bluepawn4: 0,
      Greenpawn1: 0, Greenpawn2: 0, Greenpawn3: 0, Greenpawn4: 0,
      Yellowpawn1: 0, Yellowpawn2: 0, Yellowpawn3: 0, Yellowpawn4: 0
  };
  var position = {
    Redpawn1: 0, Redpawn2: 0, Redpawn3: 0, Redpawn4: 0,
    Bluepawn1: 0, Bluepawn2: 0, Bluepawn3: 0, Bluepawn4: 0,
    Greenpawn1: 0, Greenpawn2: 0, Greenpawn3: 0, Greenpawn4: 0,
    Yellowpawn1: 0, Yellowpawn2: 0, Yellowpawn3: 0, Yellowpawn4: 0
};
 var winner={
     Red:0,Blue:0,Green:0,Yellow:0
 };
    $(document).ready(function(){
     
      $("h3").hide();
   
  });
  
  var tu=0;  
  function randomNum()
   { tu=tu%4;
      if(!clicked)
     {
      var i=Math.floor(Math.random() * 6 + 1)  ;
       var img="url('Images/"+i+".jpg')";
    
      $('#dice').css('background-image',img);   
       num=i;
       clicked=1;
     }
      if(num!=6 && checkOnBoard(tu))
      {      
            $('h3').show();
            tu++;
            setTimeout(dik,1000);
            clicked=0;
      }
      
    }
   
    function dik()
    { tu=tu%4;
      $("h3").hide();
    $('#bead').text(pawn[tu]);
    $('#bead').css("color",pawn[tu]);
      $('#dice').css('background-image','url(Images/dice.gif)');
      
      
    }
   
   function checkOnBoard(k)
   {   var c=0;
      for(var i=1;i<=4;i++)
      {  var sd=pawn[k]+"pawn"+i;
         if(onboard[sd]==1)
          c++;
           
      }
      if(c>0)
      return 0;
      else
      return 1;
   }
    
   function movePawn(Color,paw)
   {  var knee;
      if( Color==pawn[tu])
      {
       var st=Color+"pawn"+paw;
       
       if(Color=="Green")
       knee=".g";
   else if(Color=="Red")
      knee=".r";
      else if(Color=="Blue")
      knee=".b";
      else
      knee=".y";
      knee+=paw;
       if(onboard[st]==0 && clicked && num==6)
       {
          onboard[st]=1;
          var stk=Color+"pawn";
          addPawn(stk,knee);
          clicked=0;
          setTimeout(dik,1000);
          
        }
        if(clicked && onboard[st]==1)
        {
           if(position[st]==0)
           {
              if(Color=="Green")
              {
                position[st]=1;
              }
              else if(Color=="Red")
              {
                position[st]=11;
              }
              else if(Color=="Blue")
              {
                position[st]=21;
              }
              else if(Color=="Yellow")
              {
                position[st]=31;
              }
           }
           
            moveBy(st,knee,Color);
        }
      }
    }   
    function moveBy(tlk,knee,Color)
    {  var k=num;
       var flg=0;
       while(k--)
       {  
         position[tlk]++;
         
         if(tu==0)
         { 
          if(flg==0)
          {  if(  (position[tlk]+num)>=47)
              { 
                break;
              }
              else
              flg=1;
          }
        if(position[tlk]>=1 && position[tlk]<=5 || position[tlk]>9 && position[tlk]<=11 || position[tlk]>15 && position[tlk]<=19)
        {
          moveRight(knee);
        }
        else if(position[tlk]>5 && position[tlk]<=9 ||(position[tlk]>31 && position[tlk]<=35)||(position[tlk]>39 && position[tlk]<=40))
        {
          moveUp(knee);
        }
        else if(position[tlk]>11 && position[tlk]<=15||(position[tlk]>19 && position[tlk]<=21) || (position[tlk]>25 && position[tlk]<=29))
        {
          moveDown(knee);
        }
        else if(position[tlk]>21 && position[tlk]<=25 || (position[tlk]>29 && position[tlk]<=31)||(position[tlk]>35 && position[tlk]<=39))
        {
          moveLeft(knee);
        }
        else if(position[tlk]>=41 && position[tlk]<45)
        {
          moveRight(knee);
        }
        else if(position[tlk]==45)
        {   
          
          moveRight(knee);
           removePawn(knee);
           position[tlk]=0;
           onboard[tlk]=0;
           checkOut(Color);
        }
        }
        else if(tu==1)
        { 
         if(flg==0)
         {  if(  (position[tlk]+num)>=57)
             {
               break;
             }
             else
             flg=1;
         }
       if(position[tlk]>41 && position[tlk]<=45 || position[tlk]>49 && position[tlk]<51 || position[tlk]>15 && position[tlk]<=19)
       {
         moveRight(knee);
       }
       else if(position[tlk]>45 && position[tlk]<=49 ||(position[tlk]>31 && position[tlk]<=35)||(position[tlk]>39 && position[tlk]<=41))
       {
         moveUp(knee);
       }
       else if(position[tlk]>11 && position[tlk]<=15||(position[tlk]>19 && position[tlk]<=21) || (position[tlk]>25 && position[tlk]<=29))
       {
         moveDown(knee);
       }
       else if(position[tlk]>21 && position[tlk]<=25 || (position[tlk]>29 && position[tlk]<=31)||(position[tlk]>35 && position[tlk]<=39))
       {
         moveLeft(knee);
       }
       else if(position[tlk]>=51 && position[tlk]<55)
       {
         moveDown(knee);
       }
       else if(position[tlk]==55)
       {   
        moveDown(knee);
          removePawn(knee);
          position[tlk]=0;
           onboard[tlk]=0;
          checkOut(Color);
       }
       }
       else if(tu==2)
        { 
         if(flg==0)
         {  if(  (position[tlk]+num)>=67)
             {
               break;
             }
             else
             flg=1;
         }
       if(position[tlk]>41 && position[tlk]<=45 || position[tlk]>49 && position[tlk]<=51 || position[tlk]>55 && position[tlk]<=59)
       {
         moveRight(knee);
       }
       else if(position[tlk]>45 && position[tlk]<=49 ||(position[tlk]>31 && position[tlk]<=35)||(position[tlk]>39 && position[tlk]<=41))
       {
         moveUp(knee);
       }
       else if(position[tlk]>51 && position[tlk]<=55||(position[tlk]>59 && position[tlk]<61) || (position[tlk]>25 && position[tlk]<=29))
       {
         moveDown(knee);
       }
       else if(position[tlk]>21 && position[tlk]<=25 || (position[tlk]>29 && position[tlk]<=31)||(position[tlk]>35 && position[tlk]<=39))
       {
         moveLeft(knee);
       }
       else if(position[tlk]>=61 && position[tlk]<65)
       {
         moveLeft(knee);
       }
       else if(position[tlk]==65)
       {    
        moveLeft(knee);
          removePawn(knee);
          position[tlk]=0;
          onboard[tlk]=0;
          checkOut(Color);
       }
       }
       else if(tu==3)
       { 
        if(flg==0)
        {  if(  (position[tlk]+num)>=77)
            {
              break;
            }
            else
            flg=1;
        }
      if(position[tlk]>41 && position[tlk]<=45 || position[tlk]>49 && position[tlk]<=51 || position[tlk]>55 && position[tlk]<=59)
      {
        moveRight(knee);
      }
      else if(position[tlk]>45 && position[tlk]<=49 ||(position[tlk]>31 && position[tlk]<=35)||(position[tlk]>39 && position[tlk]<=41))
      {
        moveUp(knee);
      }
      else if(position[tlk]>51 && position[tlk]<=55||(position[tlk]>59 && position[tlk]<=61) || (position[tlk]>65 && position[tlk]<=69))
      {
        moveDown(knee);
      }
      else if(position[tlk]>61 && position[tlk]<=65 || (position[tlk]>69 && position[tlk]<71)||(position[tlk]>35 && position[tlk]<=39))
      {
        moveLeft(knee);
      }
      else if(position[tlk]>=71 && position[tlk]<75)
      {
        moveUp(knee);
      }
      else if(position[tlk]==75)
      {    
        moveUp(knee);
         removePawn(knee);
         position[tlk]=0;
         onboard[tlk]=0;
         checkOut(Color);
      }
      }
      }



      if(flg==0)
      {
        position[tlk]--;
        $('h3').show();
        tu++;
        setTimeout(dik,1000);
        clicked=0;
      }
      else{
      clicked=0;
      if(num!=6)
      tu++;
      setTimeout(dik,1000);
       }

       if(Color=="Green")
       {
         if(position[tlk]<41 && position[tlk]>0)
         checkPosition(position[tlk],Color);
        }
       else if(Color=="Red")
       {
         if(position[tlk]<51 && position[tlk]>0)
         checkPosition(position[tlk],Color);
        }
        else if(Color=="Blue")
        {
          if(position[tlk]<61 && position[tlk]>0)
          checkPosition(position[tlk],Color);
         }
         else if(Color=="Yellow" && position[tlk]>0)
         {
           if(position[tlk]<71)
           checkPosition(position[tlk],Color);
          }
    }
    function checkOut(Color)
    {
      winner[Color]++;
       if(winner[Color]==4)
       { $("#dice").remove();
         $("h2").hide();
         $("h2").remove();
         $("h1").remove();
         var l="<h1>"+Color+"player wins"+"</h1>";
         $("#turn").append(l);
          alert(Color+"Wins");
       }
    }
    var step=60;
    function moveRight(knee)
    {
       
       x=$(knee).offset();
       var k=x.left+61;
       $(knee).offset({left:k});
       
    }
    function moveLeft(knee)
    {
       
       x=$(knee).offset();
       var k=x.left-61;
       $(knee).offset({left:k});
       
    }
    function moveUp(knee)
    {
       
       x=$(knee).offset();
       var k=x.top-61;
       $(knee).offset({top:k});
       
    }
    function moveDown(knee)
    {
       
       x=$(knee).offset();
       var k=x.top+61;
       $(knee).offset({top:k});
       
    }
    function removePawn(knee)
    {
       $(knee).remove();
    }
    function checkPosition(posi,Color)
    {
       
       if(posi>40)
       posi=posi%40;

        var flag=0;
          if(posi!=1 && posi!=11 && posi!=31 && posi!=21)
          {
            for(var i=0;i<4;i++)
            {
               if(pawn[i]!=Color)
               {
                  for(var j=1;j<=4;j++)
                  {
                      var hg=pawn[i]+"pawn"+j;
                      var pos=position[hg];
                      if(pawn[i]=="Green")
                      {
                         if(pos>=41 && pos<=45)
                         break;
                      }
                      else if(pawn[i]=="Red")
                      {
                        
                        if(pos>=51 && pos<=55)
                        break;
                      }
                      else if(pawn[i]=="Blue")
                      {
                        
                        if(pos>=61 && pos<=65)
                        break;
                      }
                      else if(pawn[i]=="Yellow")
                      {
                        
                        if(pos>=71 && pos<=75)
                        break;
                      }
                      
                      
                     if(pos>40)
                      pos=pos%40;

                      if(pos==posi)
                      {var knee;
                        
                                 
                          
        if(pawn[i]=="Green")
        knee=".g";
    else if(pawn[i]=="Red")
       knee=".r";
       else if(pawn[i]=="Blue")
       knee=".b";
       else
       knee=".y";
       knee+=j;
                          clicked=0;          
                              
                        resetPawn(hg,knee);
                                
                      }
                  }
               }
            
            }
          }
          setTimeout(dik,1000);
    }
    function resetPawn(victim,kid) {
      onboard[victim] = 0;
      position[victim] = 0;
      var t,l;
      switch (victim) {
  
         case "Redpawn1":t=60;l=550;break;
         case "Redpawn2":t=180;l=550;break;
         case "Redpawn3":t=120;l=490;break;
         case "Redpawn4":t=120;l=610;break;
         case "Bluepawn1":t=610;l=550;break;
         case "Bluepawn2":t=490;l=550;break;
         case "Bluepawn3":t=550;l=610;break;
         case "Bluepawn4":t=550;l=490;break;
         case "Yellowpawn1":t=550;l=57;break;
         case "Yellowpawn2":t=550;l=177;break;
         case "Yellowpawn3":t=490;l=117;break;
         case "Yellowpawn4":t=610;l=117;break;
         case "Greenpawn1":t=60;l=117;break;
         case "Greenpawn2":t=180;l=117;break;
         case "Greenpawn3":t=120;l=57;break;
         case "Greenpawn4":t=120;l=177;break;
      }
      $(kid).offset({top:t,left:l});
      
      setTimeout(dik);
  }
  function addPawn(victim,kid) {
    
    var t,l;
    switch (victim) {

       case "Redpawn":t=27;l=392.5;break;
       case "Bluepawn":t=395.5;l=639;break;
       case "Yellowpawn":t=636.5;l=273;break;
       case "Greenpawn":t=272;l=27.5;break;
    }
    $(kid).offset({top:t,left:l});
    
}