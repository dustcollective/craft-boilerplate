<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

 return array(

	// Settings when developing locally.
 	'*' => array(
 		'server' => 'localhost',
 		'user' => 'root',
 		'password' => 'root',
 		'database' => '',
		'tablePrefix' => 'craft'
 	),

	// Settings for staging.
 	'staging.example.com' => array(
 		'server' => '',
 		'user' => '',
 		'password' => '',
 		'database' => '',
		'tablePrefix' => 'craft'
 	),

	// Settings for live.
	'example.com' => array(
		'server' => '',
		'user' => '',
		'password' => '',
		'database' => '',
		'tablePrefix' => 'craft'
	)

 );
