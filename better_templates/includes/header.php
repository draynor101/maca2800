<?php 

	$titles = array( 
		'contact' => 'Contact me! I am awesome!',
		'home' => 'Welcome to my page!!',
		'404' => 'Where you goin?! NO WHERE!!!'
	);
	
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<title><?php echo $titles[$page]; ?></title>
		<meta charset="utf-8" />
		<link rel="stylesheet" type="text/css" href="css/main.css">
		<link rel="stylesheet" type="text/css" href="css/<?php echo $page; ?>.css">
	</head>
	<body>

