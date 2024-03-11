// JavaScript Document
$(function(){
  // 메뉴
  $("nav>ul>li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown()
  })
  $("nav>ul>li").mouseleave(function(){
    $(".sub").stop().slideUp()
  })

  //팝업
  $(".pp").click(function(){
    $(".popup").show();
    return false;
  })
  $(".popup button").click(function(){
    $(".popup").hide();
  })

  //텝
  var i;
  $(".tabmenu h2").click(function(){
    $(".tabmenu h2").removeClass("on")
    $(this).addClass("on")

    i = $(this).index();
    console.log(i)

    $(".tabcon").hide()
    $(".tabcon").eq(i).show();
  })

  //슬라이드
  var t = 0;
  function slide(){
    if(t<2){
        t++;
    }else{
        t=0
    }

    $(".slide ul li").fadeOut();
    $(".slide ul li").eq(t).fadeIn();
  }

  setInterval(slide, 2000)
  

})