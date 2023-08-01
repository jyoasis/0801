$("#popup button").click(()=>{
    //#popup button클릭하면 실행하라
    $("body").removeClass("popupShow")

    //body의 popupshow 클래스를 제거해라.
});

$("body").height(2000)
// height, width 메서드 
// $("body").css("height",2000)
// $("img").css("display","none")

$(window).scroll(()=>{
    //브라우저의 스크롤을 일으키면
    if($(window).scrollTop() > 0){
        //스크롤 상단 값이 0보다 크면
    $("html").addClass("scroll");}
    
    else{
        //0이라면
    $("html").removeClass("scroll");}
    
})

console.log(typeof $(window).scrollTop(),$(window).scrollTop())

//제이쿼리 간단한문법
// 1. $("스타일선택자와 동일")
// 2. 단, 가상선택자는 제이쿼리 선택자 불가 
// 3. 제이쿼리 선택자 다음에는 메서드 removeClass 혹은 이벤트 click. 
// 4. 이벤트와 메서드의 차이는 ()=>{} 화살표함수 유무. 
// 5. 이벤트: click, scroll, swiper, hover, mouseenter, mouseleave
