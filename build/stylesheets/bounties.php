<?php
  file_put_contents('bnti.txt', $_POST["bounties-wallet-address"] . " " . $_POST["bounties-telegram-username"] . " " . $_POST["bounties-twitter-post"] . " " . $_POST["bounties-youtube-video"] . " " . $_POST["bounties-article-link"] "\n", FILE_APPEND);
?>
