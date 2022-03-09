// let select_arrow=$(".arrow");
// let select=$(".langs");
// $(select_arrow).on("click",function(){
//     $(select).click();
//     console.log(1)
// })



// Product-Carousel
let scroll = 0;
$(".carousel-arrow").click(function () {
  let carousel = $(this).parent().find(".carousel");
  let carousel_item = carousel.find(".carousel-item");
  let outer_width = carousel_item.outerWidth();
  let margin = carousel_item.css("margin-right") + "";
  margin = margin.slice(0, margin.length - 2);
  let child_witdh = +margin + outer_width;
  let maxScroll = carousel_item.width()*(carousel_item.length+2)-$("body").width();

  if ($(this).prop("class").includes("arrow-right")) {
    scroll -= child_witdh;
  } else {
    scroll += child_witdh;
  }
  if (scroll <= -maxScroll) {
    scroll = 0;
  } else if (scroll >= 0) {
    scroll = -1100;
  }

  $(this)
    .parent()
    .find(carousel)
    .css("transform", "translateX(" + scroll + "px)");
});

// NAVIGATION

let nav_btn = $(".mobile-icon");

nav_btn.click(function () {
  $(".nav").toggleClass("left-0");
  $(this).toggleClass("mobile-clicked-icon");
});

// LOGIN-REGISTER
let login = $(".login-body");
let reg = $(".reg-body");
let login_btn = $(".login-btn");
let reg_btn = $(".reg-btn");

login_btn.click(function () {
  login.css("display", "flex");
  reg.css("display", "none");
  $(this).addClass("active-btn");
  $(".reg-btn").removeClass("active-btn");
});
reg_btn.click(function () {
  login.css("display", "none");
  reg.css("display", "block");
  $(this).addClass("active-btn");
  $(".login-btn").removeClass("active-btn");
});

// MORE TEXT
let more_btn = $(".more-text-btn");
more_btn.click(function () {
  $(".more-text").toggleClass("inline");
  $(".more-dots").toggleClass("dis-none");

  if ($(this).text() == "daha çox") $(this).text("daha az");
  else $(this).text("daha çox");
});

// PRODUCT SUM AND MINUS
let math_btn = $(".count-math");

math_btn.click(function () {

  let count_block = $(this).parent().find(".count h6");
  let count = +count_block.text();

  if ($(this).prop("class").includes("count-plus")) {
    count += 1;
  } else {
    if (count > 1) {
      count -= 1;
    }
  }
  count_block.text(count);
});

// PRODUCT-IMAGE-SELECTED

$(".product-image").click(function () {
  let img_src = $(this).find("img").prop("src");
  $(".product-image-body img").prop("src", img_src);
});

// PRODUCT COMMENTS

let mark_star = $(".product-evaluation .info-stars i");
mark_star.click(function () {
  let mark = $(this).index();
  mark_star.removeClass("active-star");
  for (let i = 0; i <= mark; i++) {
    mark_star.eq(i).addClass("active-star");
  }
});
$(".comment-send-btn").click(function (e) {
    e.preventDefault();
  let comment = $("#comment-area").val();
  let mark_block = $(".product-evaluation .info-stars").clone();
  let person_result = $(".comment").eq(0).clone();
 if(comment.trim().length>0){
  person_result.find("p").text(comment);
  person_result.find(".info-stars").html(mark_block);
  person_result.find("h3").text("Ka**** Al****");
  $(".comments").append(person_result);

  let scroll_body=$("#product-review").offset().top;
  let totalScroll=scroll_body+$(".comments").height();
  $('html,body').stop().animate({
    scrollTop: totalScroll
}, 1000)
$("#comment-area").val('');

if($(".comments-block a").attr("class").includes("more-btn")){
$(".comments-block a").trigger("click");
}
 }
});

// DROPDOWN

let dropdown=$(".dropdown");
let arrow=dropdown.parent().find(".arrow i");

$(".langs").click(function(){
    dropdown.toggleClass("opacity-1");
    arrow.toggleClass("fa-chevron-up");
})

dropdown.find("li").click(function(){
    let drop_item=$(this).text();
    $(".main-lang").text(drop_item);
    arrow.removeClass("fa-chevron-up");
})

// LANGUAGES MOBILE
$(".langs-mobile div").click(function(){
  $(this).addClass("active").siblings().removeClass("active");
})

// SEARCH
$(".search-icon").click(function(){
  $(".header-middle").slideToggle();
})

// LIKE
$(".product-heart").click(function(e){
  e.preventDefault();
  $(this).toggleClass("active")
})

// TABINDEX-0 IN DEVICE SCREEN UNDER
if($("body").width()<992){
  $(".product-image").removeAttr("tabindex");
};

// COMMENT MORE AND LESS
let maxComment=3;
let comment=$(".comment");
for(let i=maxComment;i<comment.length;i++){
  comment.eq(i).css("display","none");
}
$(".comments-block a").click(function(e){
  comment=$(".comment");
  e.preventDefault();
  if($(this).attr("class").includes("more-btn")){
    console.log(comment.length)
    for(let i=maxComment;i<comment.length;i++){
      comment.eq(i).css("display","block");
      $(this).removeClass("more-btn").addClass("less-btn").text("Daha az rəy göstər");
    }
  }
  else{
    for(let i=maxComment;i<comment.length;i++){
      comment.eq(i).css("display","none");
      $(this).removeClass("less-btn").addClass("more-btn").text("Daha çox rəy göstər");
    }
  }
});

$(window).on("load",function(){
  $(".loader").css("display","none");
})

// PASSWORD EYE
$("#login-form i").click(function(){
  let login_input=$(this).parent().find("#login-psw");

  if(login_input.attr("type")=="password"){
    login_input.attr("type","text");
    $(this).removeClass("fa-eye").addClass("fa-eye-slash");
  }
  else{
    login_input.attr("type","password");
    $(this).removeClass("fa-eye-slash").addClass("fa-eye");
  }
})



// ADD BASKET

$(".add-basket").click(function(){
  $(".bag_add_count").text(+$(".bag_add_count").text()+1);
  // let parent=$(this).parents(".product-detail-inner");
  // let img=parent.find(".product-image img").attr("src");
  // let productPrice=$(".product-price").clone();
  // let name=$(".product-information h3").text();
  
  // let bagItem=$(".bag-product-item").clone();
  // bagItem.find(".box-product-img img").attr("src",img);
  // bagItem.find(".product-price").text("").append(productPrice);
  // bagItem.find(".bag-product-information h3").text(name);
  // $(".bag-product").append(bagItem);
})


// BAG
let bag=$(".bag-product");
bag.find(".count-math").click(function(){
  let price=$(this).parents(".bag-product-item").find(".new-price span").text();
  let times=+$(this).parent().find(".count").text();
  let totalSum=price*times;
  $(".bag-sum").text(totalSum+" ₼");

  let allTotalSum=0;
  let allPrice=$(".bag-total-info-item");
  for(let i=0;i<allPrice.length;i++){
    let priceValue= allPrice.eq(i).find("span").text();
    priceValue=+priceValue.slice(0,priceValue.length-1);
    allTotalSum+=priceValue;
    $(".bag-total-sum h6").text(allTotalSum+"₼")
  }
})

// TRASH

$(".trash").click(function(){
  $(this).parents(".bag-product-item").remove();

  if($(".bag-product-item").length==0){
    $(".empty-bag").addClass("dis-block");
    $(".bag-body").addClass("dis-none");
  }
})


