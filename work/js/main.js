$(document).ready(function(){
    
    var menuOffset =  $(".over-menu").offset().top;
    
    $(window).scroll(function(){
        
        var menu = $(".over-menu");
        
        var headerMid = $(".header-mid");
      //  var menuHeight = menu.innerHeight();
        
        if($(this).scrollTop() > menuOffset){
           menu.css({
               position: "fixed",
               top: "0",
               left: "0",
               background: "#fff",
               width: "100%",
               zIndex: "100"
           });
           
           headerMid.css("margin-top", menu.innerHeight() + "px");
        }else{
            menu.css({
                position: "static"
            });
            headerMid.css("margin-top", "0");
        }
    });
    
    $(".touch-menu").click(function(){
        $(".menu").slideToggle(1000);
    });
    
    $(window).resize(function(){
        $(".menu").removeAttr("style");
    });
    
    
  $(".reward-box").slick({
      slidesToShow: 3,
      adaptiveHeight: true,
      responsive: [
          {
          breakpoint: 1200,
          settings: {
            infinite: true,
            arrows: false,
              slidesToShow: 2
            }
        },
          
        {
            breakpoint: 800,
            settings: {
                infinite: true,
                arrows: false,
                slidesToShow: 1,
            }
        }
      ]
  });
    
 $(".production-slider").slick({
     
     fade: true,
     arrows: false,
     dots: true,
 });
    
//плавный скролл
    
    $(".menu a").click(function(e){
        e.preventDefault();
        
        var path = $(this).attr("href");
        
        $("body, html").animate({scrollTop: $(path).offset().top - $(".over-menu").innerHeight() - 20}, 1000);
    });
    
});










/*$(document).ready(function(){

var path = "https://www.yandex.ru/";
    $("form").submit(function (e) {
        e.preventDefault();

        // в эту переменную впишише путь перенаправления
        var path = "https://www.yandex.ru";

        var check = $(this).find(".checkbox").prop("checked");

        if(check && $(".first-input").val() !== "" && $(".last-input").val() !== ""){
            var msg  = $(this).serialize();
            $.ajax({
                type: 'POST',
                url: 'handler.php',
                data: msg,
                success: function(data) {
                    if(data == "1"){
                        document.location.href = path;
                    }
                },
                error:  function(xhr, str){
                    alert('Возникла ошибка');
                }
            });

            
        }



    });

    $(".last-input").on("keypress", function(key) {
        if (key.charCode < 48 || key.charCode > 57)
            return false;
    });

}); */