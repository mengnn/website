$(function(){
  /*行业解决方案案例*/
  $(".plan_box ul li ").mouseenter(function(){
    $(this).find(".img2").fadeOut(300);
  });
  $(".plan_box ul li ").mouseleave(function(){
    $(this).find(".img2").fadeIn(300);
  });
  /*视频展示*/
/*  $(".choose_btn>ul>li>a").click(function(){

    var id=$(this).attr("href");
    // alert(id)
    $(id).addClass("chooseAll_active").siblings().removeClass("chooseAll_active");
  });  */

  /*演示条*/
  /*$(".choose_btn>ul>li>a").click(function(){
    $(this).parents().addClass("bor_cor").siblings().removeClass("bor_cor");
  })*/


})
