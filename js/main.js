$(document).ready(function() {

    var priceOneLicenseMonth = 25;
    //цена ежемесячной лицензии в $
    var priceOneLicenseYear = 20;
    //цена ежемесячной лицензии при оплате за год

    var minEmail = 250;
    //переменная отвечающая за появление формы "задать вопрос", по умолчанию 50 лицензий. Данное значение можно менять.

    var device = 150;
    //цена устройства
    var deviceYear = 140;
    //цена устройства при покупке лицензии за год

    //Всё что ниже не трогать!!!!!!!!!!

    var value = 1;
    //количество лицензий. Динамически меняется
    var activePlan = "2";
    var monthPrice;
    var YearPrice;
    //итоговая ежемесячная цена. По умолчанию пуста.
    var sale;
    //скидка при оплате за год

    var amendValue = 1;
    $("#slider").slider();
    $(".number-input").val(value);
    $("#slider").slider("option", "value", value);
    $("#2").addClass("selectable");
    $("#2 .pricing-card-hint").show(0);
    
    toCount(value, priceOneLicenseMonth, priceOneLicenseYear, device, deviceYear, activePlan);

    $("#slider").bind("slide", function(event, ui) {
        value = $(this).slider("option", "value");

        amendValue = (+value) * 10;

        $(".number-input").val(amendValue);

        if (amendValue > minEmail) {
            $(".form-hide, .pricing-container-device, .btn").addClass("hide");
            $(".contact-form-js").show(0);
            $(".contact-form-js").show(0);
            $(".btn-question").show(0);
        } else {
            $(".form-hide, .pricing-container-device, .btn").removeClass("hide");
            $(".contact-form-js").hide(0);
            $(".btn-question").hide(0);
        }

        toCount(amendValue, priceOneLicenseMonth, priceOneLicenseYear, device, deviceYear, activePlan);
    });

    //срабатывает при клике на диапозон
    $(".tick-text").click(function() {
        amendValue = $(this).html();
        $("#slider").slider("option", "value", (amendValue / 10));
        $(".number-input").val(amendValue);

        if (amendValue > minEmail) {
            $(".form-hide, .pricing-container-device, .btn").addClass("hide");
            $(".contact-form-js").show(0);
            $(".contact-form-js").show(0);
            $(".btn-question").show(0);
        } else {
            $(".form-hide, .pricing-container-device, .btn").removeClass("hide");
            $(".contact-form-js").hide(0);
            $(".btn-question").hide(0);
        }

        toCount(amendValue, priceOneLicenseMonth, priceOneLicenseYear, device, deviceYear, activePlan);
    });

    $(".pricing-card-js").click(function() {
        activePlan = $(this).attr("id");

        $(".pricing-card-js").removeClass("selectable");
        $(".pricing-card-js").find(".pricing-card-hint").css("display", "none");

        $(this).addClass("selectable");
        $(this).find(".pricing-card-hint").css("display", "block");
        
        

        toCount(amendValue, priceOneLicenseMonth, priceOneLicenseYear, device, deviceYear, activePlan);
    });

    //настройки валидатора
    $("#contact-form-validate").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 15
            },

            email: {
                required: true,
                email: true,
                maxlength: 25
            },

            phonenumber: {
                required: true,
                digits: true,
                maxlength: 15
            },
            question: {
                required: true,
                minlength: 20,
                maxlength: 500
            }
        }

    });

    $(".number-input, .phone").on("keypress", function(key) {
        if (key.charCode < 48 || key.charCode > 57)
            return false;
    });

    $(".btn-question").click(function() {
        $("#contact-form-validate").trigger("submit");
    });

    $(".number-input-1, .number-input-2").keyup(function() {

        amendValue = $(this).val();
        $("#slider").slider("option", "value", (amendValue / 10));

        $(".number-input").val(amendValue);

        if (amendValue > minEmail) {
            $(".form-hide, .pricing-container-device, .btn").addClass("hide");
            $(".contact-form-js").show(0);
            $(".contact-form-js").show(0);
            $(".btn-question").show(0);
        } else {
            $(".form-hide, .pricing-container-device, .btn").removeClass("hide");
            $(".contact-form-js").hide(0);
            $(".btn-question").hide(0);
        }

        toCount(amendValue, priceOneLicenseMonth, priceOneLicenseYear, device, deviceYear, activePlan);
    });
    
    $(".next").click(function(){
        
        var currentI =  $(".number-input").val();
        amendValue = +currentI + 1;
        
        $(".number-input").val(amendValue);
        $("#slider").slider("option", "value", amendValue / 10);
        
        toCount(amendValue, priceOneLicenseMonth, priceOneLicenseYear, device, deviceYear, activePlan);
    });
    
    $(".prev").click(function(){
        var currentI =  $(".number-input").val();
        if(+currentI > 0){
            amendValue = +currentI - 1;
            
            $(".number-input").val(amendValue);
            $("#slider").slider("option", "value", amendValue / 10);
        
            toCount(amendValue, priceOneLicenseMonth, priceOneLicenseYear, device, deviceYear, activePlan);
        }
    });

    // калькулятор
    function toCount(colValue, priceM, priceY, deviceM, deviceY, active) {
        monthPrice = (+colValue) * (+priceM);
        YearPrice = (+colValue) * (+priceY) * 12;
        sale = (monthPrice * 12) - YearPrice;

        $(".oneMonth").text("$" + priceM);
        $(".lic").text(colValue);
        $(".oneYearM").text("$" + priceY);
        $(".sale").text("$" + sale);
        $(".rate-summary-m").text("$" + monthPrice);
        $(".rate-summary-y").text("$" + YearPrice);

        if (active == "2") {
            $(".priceD").text("$" + deviceM);

            var sumPriceD = colValue * deviceM;

            $(".sumPriceD").text("$" + sumPriceD);
            var sumPriceY = colValue * deviceY;
            var saleD = sumPriceD - sumPriceY;

            $(".hintDeviceSale").text("$" + saleD);
            $(".message").text("Upgrade to Annual Plan and save");

            $(".pricing-card-hint-device").removeAttr("style");
        } else if (active == "1") {
            $(".priceD").text("$" + deviceY);

            var sumPriceD = colValue * deviceM;
            var sumPriceY = colValue * deviceY;
            var saleD = sumPriceD - sumPriceY;

            $(".sumPriceD").text("$" + sumPriceY);
            $(".hintDeviceSale").text("$" + saleD);
            $(".message").text("Your Annual Software Plan saves you");

            $(".pricing-card-hint-device").css("background", "#eff9ed");
            $(".pricing-card-hint-device").css("border-color", "#c0e8b3");
            $(".pricing-card-hint-device").css("color", "#333941");
        }
    }

});