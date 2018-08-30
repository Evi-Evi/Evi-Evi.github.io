<?php
    //в эту переменную необходимо вписать ваш email
    $mail = "example@mail.ru";

        if(!empty($_POST["degustation"])){
           $name = "Дегустационный набор";
           $result = mail($mail, $name, "Номер: " . $_POST["degustation"]);
            echo "1";
        }

        if(!empty($_POST["number"]) && !empty($_POST["email"])){
            $number = htmlentities($_POST["number"]);
            $email = htmlentities($_POST["email"]);

            $name = "Купить чай";

            $result = mail($mail, $name, "Номер: " . $number . " Почта: " . $email); 
            
            echo "1";
        }

        if(!empty($_POST["lid"])){
            
            $name = "заказать звонок";
            
            $result = mail($mail, $name, "Номер: " . $_POST["lid"]);
            echo "1";
        }

        if(!empty($_POST["emailpartner"])){
            $name = "получить каталог с ценами и скидками";

            $result = mail($mail, $name, "Почта: " . $_POST["emailpartner"]);

            echo "1";
        }

        if(!empty($_POST["partner"])){
            $name = "Скачать условия партнёрства";

            $result = mail($mail, $name, "Почта: " . $_POST["partner"]);

            echo "1";
        }

        if(!empty($_POST["exit"])){
            $name = "Получить книгу";

            $result = mail($mail, $name, "Почта: " . $_POST["exit"]);

            echo "1";
        }

        
        
    
?>