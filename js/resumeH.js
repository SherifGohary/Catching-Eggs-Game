$(function () {
     $("#pauseResume").on("click",function(){
          if($("#pauseResume").val()=="Resume"){
               $("#pauseResume").val("Pause");
               theTimer();
               anime1();
               move();
               animelife();
               animerock();
               movebacket();
               movePausedEggs();
          }
          else{
               $("#pauseResume").val("Resume");
               clearInterval(stopTimer);
               $(".FallingEgg").stop();
               $(".chicken").stop(true);
               clearInterval(egganime);
               clearInterval(lifeanime);
               clearInterval(rockanime);
               eventkey.off();
               eventmouse.off();
          }
     });
});//load