<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Перевіряємо, чи була відправлена ​​форма
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Зчитуємо JSON дані з тіла запиту
    $data = json_decode(file_get_contents('php://input'), true); 

    // Задаємо змінні для даних форми
    $formName = !empty($data['formName']) ? $data['formName'] : '';
    $name = !empty($data['name']) ? "<b>Ім'я: </b>". $data['name'] ."<br>" : ''; 
    $email = !empty($data['email']) ? "<b>Пошта: </b>". $data['email'] ."<br>" : '';
    $phone = !empty($data['phone']) ? "<b>Телефон: </b>". $data['phone'] ."<br>" : '';
    $blockList = !empty($data['blockList']) ? "<b>Цегла:</b><br>". $data['blockList'] ."<br>" : '';
    $tubesList = !empty($data['tubesList']) ? "<b>Труби:</b><br>". $data['tubesList'] ."<br>" : '';
    $leafList = !empty($data['leafList']) ? "<b>Лози:</b><br>". $data['leafList'] ."<br>" : '';
    $mainBlock = !empty($data['mainBlock']) ? "<b>Головне меценатство :</b><br>". $data['mainBlock'] ."<br>" : '';
    $message = !empty($data['message']) ? "<b>Коментар:</b> ". $data['message'] ."<br>" : '';

    // Створюємо новий об'єкт PHPMailer
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('uk', 'PHPMailer/language/');
    $mail->IsHTML(true);

    // Налаштування SMTP
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    // $mail->Username = 'alexracovets@gmail.com';
    // $mail->Password = 'mngv tbjw rzmv dspn';
    $mail->Username = 'ukraineafon@gmail.com';
    $mail->Password = 'jhpj bluv byzr retp';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    // Від кого лист 
    // $mail->setFrom('alexracovets@gmail.com', ' Vine of Athos');
    $mail->setFrom('ukraineafon@gmail.com', ' Vine of Athos');

    // Кому лист
    // $mail->addAddress('alexracovets@gmail.com', ' Vine of Athos');
    $mail->addAddress('ukraineafon@gmail.com', ' Vine of Athos');

    // Тема листа
    $mail->Subject = 'Заявка з сайту Vine of Athos';

    // Тіло листа
    $mail->Body =
    '<p><strong><h3>'.$formName.'</h3></strong></p>'.
    '<p>'.$name.' </p>'.
    '<p>'.$email.'</p>'.
    '<p>'.$phone.'</p>'.
    '<b>Обрані Позиції:</b><br>'.
    ''.$blockList.'</br>'.
    ''.$tubesList.'</br>'.
    ''.$leafList.'</br>'.
    ''.$mainBlock.'</br>'.
    '<p>'.$message.'</p>';

    // Надсилаємо лист
    if ($mail->send()) {
        echo 'Ваше повідомлення надіслане!';
    } else {
        echo 'Виникла помилка, сбробуй ще раз :) : ' . $mail->ErrorInfo;
    }
}
?>
