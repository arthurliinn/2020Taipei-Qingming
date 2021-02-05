//animation

$(document).ready(function(){
  if($(window).width() > 1024 && $(window).width() != 1080 ){

     //leaf
     $("#leaf-left").css("top","-5%");
     $("#leaf-right").css("top","-5%");
     //nav
     $("nav li").css("opacity","1");
     $("nav li").css("transform","translateY(0)");
     setTimeout(() =>{
       $("nav li").css("transition-delay","0s");
       $("nav li").css("transition","0s");
     },100);
     //len
     $("#len").css("width","10%");
  };
  //bg animation
  if($(window).width() == 1080){

    //leaf
    $("#leaf-left").css("top","-5%");
    $("#leaf-right").css("top","-5%");
    //nav
    $("nav li").css("opacity","1");
    $("nav li").css("transform","translateY(0)");
    setTimeout(() =>{
      $("nav li").css("transition-delay","0s");
      $("nav li").css("transition","0s");
    },100);
    //len
    $("#len").css("width","15%");
  };

  if($(window).width() <= 1024){

    //leaf
    $("#leaf-left").css("top","-5%");
    $("#leaf-right").css("top","-5%");
    //nav
    $("nav li").css("opacity","1");
    $("nav li").css("transform","translateY(0)");
    setTimeout(() =>{
      $("nav li").css("transition-delay","0s");
      $("nav li").css("transition","0s");
    },100);
    //len
    $("#len").css("width","10%");
  };
    
  
});


//nav
$(".main_btn_container").on("click",function(){
  if($(this).attr("id") !== "board_btn_id"){
    main_idName =  $(this).attr("id");
    containerName ="#"+ main_idName + "_container";
    $(containerName).css("display", "block");
    $("#exit_area").css("display", "block");
  };
});




//close box btn

$(".close_btn").on("click",function(){
  $(".paragraph_container").css("display","none");
  $(".paragraph").css("display","none");
  $("#paragraph_concert").css("display","block");
  $('.paragraph:nth-child(3)').css("display","block");
  $('.paragraph:nth-child(2)').css("display","block");
  $(".paragraph_select_btn").css("background-color","#ffffff");
  $(".paragraph_select_btn").css("color","#00A58E");
  $('.paragraph_select_btn:nth-child(1)').css("background-color","#00A58E");
  $(".paragraph_select_btn:nth-child(1)").css("color","#ffffff");
  $("#exit_area").css("display","none");
  $("#announcement").css("display","none");

});
$("#exit_area").on("click",function(){
  $(".paragraph_container").css("display","none");
  $(".paragraph").css("display","none");
  $("#paragraph_concert").css("display","block");
  $('.paragraph:nth-child(3)').css("display","block");
  $('.paragraph:nth-child(2)').css("display","block");
  $(".paragraph_select_btn").css("background-color","#ffffff");
  $(".paragraph_select_btn").css("color","#00A58E");
  $('.paragraph_select_btn:nth-child(1)').css("background-color","#00A58E");
  $(".paragraph_select_btn:nth-child(1)").css("color","#ffffff");
  $("#exit_area").css("display","none");
});

//paragraph select

$(".paragraph_select_btn").on("click",function(){
  idName =  $(this).attr("id");
  paragraphName = "#paragraph_" + idName;
  if(idName !== "carbon"){
    $(".paragraph").css("display","none");
    $(paragraphName).css("display","block");
    $(".paragraph_select_btn").css("background-color","#ffffff");
    $(".paragraph_select_btn").css("color","#00A58E");
    $(this).css("background-color","#00A58E");
    $(this).css("color","#ffffff");
  };
});

//message text length limit
function textLimit(){
  textLength = 150 - $("#message_content").val().length;
  $("#text_limit").text("※尚可輸入" + textLength + "字");
  if($("#message_content").val().length >= 150){
    $("#message_content").val($("#message_content").val().substring(0,149));
  };
};

//test
$("#title").on("click", function(){
  // console.log("喵喵(=^ • ω • ^=)");
  var sliderDiv = "<div class='slick-slide slick-current slick-active' data-slick-index='1' aria-hidden='false' style='width: 289px;'><div><div class='board'><p class='board_header'>測試用貓貓方塊</p><p class='board_paragraph'>喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵</p> <p class='board_footer'>孫子 某某某</p></div></div></div>";
  $("#boards_container").slick('slickAdd',sliderDiv);
});



