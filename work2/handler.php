<?php
    //в эту переменную необходимо вписать ваш email
    $mail = "example@mail.ru";

    if(!empty($_POST["name"]) && !empty($_POST["phone"])){

        $name = htmlentities($_POST["name"]);
        $phone = htmlentities($_POST["phone"]);

        $result = mail($mail, $name, "Номер: " . $phone);

        echo $result;
    }
?>