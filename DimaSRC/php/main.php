<?php
    $data = json_decode(file_get_contents('php://input'), true);
    print_r($data['name']);
    // токен бота
    define('TELEGRAM_TOKEN', '5782053427:AAH931P7kyIy2DmW0ZL9WvCibn22tJx5UXc');
    // ваш внутренний ID
    define('TELEGRAM_CHATID', '978462729');
    if ($data['tg'] == NULL){
        $message = $data['name'].' хочет %0A'. $data['title'] . '%0AНомер телефона: '.$data['tel'];
    }
    else{
        $message = $data['name'].' хочет %0A'. $data['title'] . '%0AНомер телефона: '.$data['tel'].'%0ATelegram: '.$data['tg'];
    }
    $ch = curl_init('https://api.telegram.org/bot'.TELEGRAM_TOKEN.'/sendMessage?chat_id='.TELEGRAM_CHATID.'&text='.$message); // URL
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Не возвращать ответ
    curl_exec($ch); // Делаем запрос
    curl_close($ch); // Завершаем сеанс cURL
?>