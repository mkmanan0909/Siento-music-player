$(document).ready(function()
{
    $("h1").on(
        {
            mouseenter: function()
            {
            $("h1").css("color","red");
            },
            mouseleave: function()
            {
                $("h1").css("color","darkblue");
            }

        }
    );
    

    $("#div1").on(
    {
        mouseenter: function(){
            $(this).css("background-color", "red");
        },  
       
        mouseleave: function(){
            $(this).css("background-color", "darkmagenta");
        }, 
    });

    $("#div2").on(
        {
            mouseenter:function()
            {
                $("#div2").css("background-color","green");
            },
            mouseleave:function()
            {
                $("#div2").css("background-color","rgb(83, 0, 139)");
            },

        });
        $("#div3").on(
            {
                mouseenter:function()
                {
                    $("#div3").css("background-color","yellow");
                },
                mouseleave:function()
                {
                    $("#div3").css("background-color","rgb(139, 0, 58)");
                },
    
            });

/*
        $("#a").click(function()
    {
        $()

    });
    */
});




function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
} 




//playlist script

function audioPlayer()
  {
    var currentSong=0;

    $("#a")[0].src=$("#playlist li a")[0];
    //$("#audioPlayer")[0].play();
    $("#playlist li a").click(function(e)
    {
      e.preventDefault();
      $("#audioPlayer")[0].src=this;
      $("#audioPlayer")[0].play();
      $("#playlist li").removeClass("current-song");
      currentSong=$(this).parent().index();
      $(this).parent().addClass("current-song");

    });
    $("#audioPlayer")[0].addEventListener("ended",function(){
      currentSong++;
      if(currentSong==$("#playlist li a").length)
      currentSong=0;

      $("#playlist li").removeClass("current-song");
      $("playlist li:eq("+currentSong+")").addClass("current-song");
      $("#audioPlayer")[0].src= $("#playlist li a")[currentSong].href;
      $("#audioPlayer")[0].play();

    });
  }


  //filter table script-

    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
    