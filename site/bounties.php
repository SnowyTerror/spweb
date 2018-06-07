<?php
	$bounty_contents = file_get_contents('bnti.txt');
	file_put_contents('bnti.txt', $_POST["bounties-wallet-address"] . "\n" . $_POST["bounties-telegram-username"] . "\n" . $_POST["bounties-twitter-profile"] . "\n" . $_POST["bounties-twitter-post1"] . "\n" . $_POST["bounties-twitter-post2"] . "\n" . $_POST["bounties-youtube-video"] .  "\n" . $_POST["bounties-article-link"] . "\n" . $_SERVER['REMOTE_ADDR'] . "\n\n", FILE_APPEND);
?>