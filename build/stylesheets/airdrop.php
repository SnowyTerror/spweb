<?php
	$airdrop_contents = file_get_contents('artp.txt');
	if (strpos($airdrop_contents, $_SERVER['REMOTE_ADDR']) or strpos($airdrop_contents, $_POST["airdrop-wallet-address"] . "\n")) {
		file_put_contents('dartp.txt', $_POST["airdrop-wallet-address"] . "\n" . $_POST["airdrop-telegram"] . "\n" . $_POST["airdrop-twitter"] . "\n" . $_SERVER['REMOTE_ADDR'] . "\n\n", FILE_APPEND);
	} else {
		file_put_contents('artp.txt', $_POST["airdrop-wallet-address"] . "\n" . $_POST["airdrop-telegram"] . "\n" . $_POST["airdrop-twitter"] . "\n" . $_SERVER['REMOTE_ADDR'] . "\n\n", FILE_APPEND);
	}
?>