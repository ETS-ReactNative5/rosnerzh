<?php 
print_r($_POST);
print_r('posted');

//     [username] => mail@yandex.ru
//     [phone] => mail@yandex.ru
//     [email] => mail@yandex.ru
//     [width] => 500
//     [height] => 800
//     [type] => ladder
//     [form] => 0
//     [color] => 0
//     [energy] => false
//     [rail] => false
//     [rack] => false
//     [price] => 7 000
//     [gate] => false

  $headers = 'From: info@localhost
' .
                'Reply-To: wc34fun@mail.ru
' .
                'X-Mailer: PHP/';

  $theme = "Заказ на ".$_POST['price']."Руб. Телефон: ".$_POST['phone'];
  $letter ="Имя: ".$_POST['username']."\r\n";
  
  if(!empty($_POST['callback'])) {
    $theme = "Заказ звонка: ".$_POST['phone'];
  }
  
  if(!empty($_POST['phone'])) $letter .="Телефон: ".$_POST['phone']."\r\n";
  if(!empty($_POST['email'])) $letter .="Email: ".$_POST['email']."\r\n";
  if(!empty($_POST['type'])) $letter .="Тип: ".$_POST['type']."\r\n";
  if(!empty($_POST['width'])) $letter .="Ширина: ".$_POST['width']."\r\n";
  if(!empty($_POST['height'])) $letter .="Высота: ".$_POST['height']."\r\n";
  if(!empty($_POST['form'])) $letter .="Форма перемычек: ".$_POST['form']."\r\n";
  if(!empty($_POST['energy'])) $letter .="Электричество: ".$_POST['energy']."\r\n";
  if(!empty($_POST['rail'])) $letter .="Группировать перемычеки: ".$_POST['rail']."\r\n";
  if(!empty($_POST['rack'])) $letter .="Полочка: ".$_POST['rack']."\r\n";
  if(!empty($_POST['gate'])) $letter .="Боковое подключение: ".$_POST['gate']."\r\n";
  if(!empty($_POST['color'])) $letter .="Цвет: ".$_POST['color']."\r\n";
  echo $letter ."\r\n";
  if (mail("wc34fun@mail.ru", $theme, $letter, $headers)){
    //header("Location: /testform/thankyou.php");
  } else {
    //header("Location: /testform");
  }

//} else {
  //header("Location: /testform");
//}

?>