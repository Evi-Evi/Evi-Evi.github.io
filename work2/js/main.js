$(document).ready(function(){

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

});