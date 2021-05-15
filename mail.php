<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	
	if( empty($name) ){
		$data['error'] = 'Введите имя.';
	}else if(filter_var($email, FILTER_VALIDATE_EMAIL) == false){
		$data['error'] = 'Нормальный адресс введи.';
	}else if( empty($subject) ){
		$data['error'] = 'Письма без темы попадают только в спам!';
	}else if( empty($message) ){
		$data['error'] = 'Пустыми письмами дядя разводил моего папу';
	}else{
		
		$formcontent="From: $name\nSubject: $subject\nEmail: $email\nMessage: $message";
		
		$recipient = "ivan_kot2001@mail.com";
		
		$mailheader = "From: $email \r\n";
		
		if( mail($recipient, $name, $formcontent, $mailheader) == false ){
			$data['error'] = 'Sorry, an error occured!';
		}else{
			$data['error'] = false;
		}
	
	}

	// с инета спиздил
	ini_set('display_errors','On');
	error_reporting('E_ALL');
	echo json_encode($data);
	
?>