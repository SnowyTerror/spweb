"use strict";jQuery(document).ready(function(t){function e(){o.width()>880&&t("#nav, #nav-toggle").removeClass("active")}function a(){var e=t(window).scrollTop();e<200?(t(".airdrop-information").css({opacity:"1",transform:"translateX(0)"}),t(".social-links").css({opacity:"1",transform:"translateX(0)"})):e>t("section#faq").offset().top-t(window).height()/1.5?t(".social-links").css({opacity:"1",transform:"translateX(0%)"}):(t(".airdrop-information").css({opacity:"0",transform:"translateX(-100%)"}),t(".social-links").css({opacity:"0",transform:"translateX(100%)"})),e>t("section#distribution-progress").offset().top-t(window).height()/1.5&&t(".distribution-item > .image-area > div").removeClass("animate"),t("#token-distribution .bubbles > svg:first-child").css("top",.012*e-25+"rem"),t("#token-distribution .bubbles > svg:last-child").css("top",.008*e+"rem"),t("section#roadmap .bubbles > svg:first-child").css("top",.014*e-70+"rem"),t("section#roadmap .bubbles > svg:nth-child(2)").css("top",.012*e-45+"rem"),t("section#roadmap .bubbles > svg:last-child").css("top",.016*e+"rem"),t("section#why-you-need-plex .bubbles > svg:first-child").css("top",.025*e-155+"rem"),t("section#funds-distribution .bubbles > svg:first-child").css("top",.025*e-155+"rem")}t(".airdrop-information").css({transform:"translateX(0)",opacity:"1"}),t(".airdrop-information p").css("opacity","1"),t(".social-links").css("opacity","1"),-1!=window.location.href.indexOf("/#airdrop")&&(t("#modals, #modals #airdrop-modal").addClass("active"),t("body, html").css("overflow","hidden")),t("#nav-toggle").click(function(e){e.stopPropagation(),t("#nav, #nav-toggle").toggleClass("active")});var o=t(window);e(),t(window).resize(e);var l=new Date,n=new Date("11 June 2018 18:00:0"),i=new Date("25 June 2018 00:00:0"),d=new Date("02 July 2018 18:00:0"),s=new Date("30 July 2018 00:00:0");if(l.getTime()<n.getTime()){var r=function(){var e=n;e=Date.parse(e)/1e3;var a=new Date,o=e-(a=Date.parse(a)/1e3),l=Math.floor(o/86400),i=Math.floor((o-86400*l)/3600),d=Math.floor((o-86400*l-3600*i)/60),s=Math.floor(o-86400*l-3600*i-60*d);l<"10"&&(l="0"+l),i<"10"&&(i="0"+i),d<"10"&&(d="0"+d),s<"10"&&(s="0"+s),t("#days-next").html(l),t("#hours-next").html(i),t("#minutes-next").html(d),t("#seconds-next").html(s)};t("#next-countdown").css("display","block"),r(),setInterval(function(){r()},1e3)}if(l.getTime()>n.getTime()&&l.getTime()<i.getTime()){var c=function(){var e=i;e=Date.parse(e)/1e3;var a=new Date,o=e-(a=Date.parse(a)/1e3),l=Math.floor(o/86400),n=Math.floor((o-86400*l)/3600),d=Math.floor((o-86400*l-3600*n)/60),s=Math.floor(o-86400*l-3600*n-60*d);l<"10"&&(l="0"+l),n<"10"&&(n="0"+n),d<"10"&&(d="0"+d),s<"10"&&(s="0"+s),t("#days").html(l),t("#hours").html(n),t("#minutes").html(d),t("#seconds").html(s)};t("#current-countdown").css("display","block"),c(),setInterval(function(){c()},1e3)}if(l.getTime()>i.getTime()&&l.getTime()<d.getTime()){var m=function(){var e=d;e=Date.parse(e)/1e3;var a=new Date,o=e-(a=Date.parse(a)/1e3),l=Math.floor(o/86400),n=Math.floor((o-86400*l)/3600),i=Math.floor((o-86400*l-3600*n)/60),s=Math.floor(o-86400*l-3600*n-60*i);l<"10"&&(l="0"+l),n<"10"&&(n="0"+n),i<"10"&&(i="0"+i),s<"10"&&(s="0"+s),t("#days-next").html(l),t("#hours-next").html(n),t("#minutes-next").html(i),t("#seconds-next").html(s)};t("#next-countdown").css("display","block"),m(),setInterval(function(){m()},1e3)}if(l.getTime()>d.getTime()&&l.getTime()<s.getTime()){var h=function(){var e=s;e=Date.parse(e)/1e3;var a=new Date,o=e-(a=Date.parse(a)/1e3),l=Math.floor(o/86400),n=Math.floor((o-86400*l)/3600),i=Math.floor((o-86400*l-3600*n)/60),d=Math.floor(o-86400*l-3600*n-60*i);l<"10"&&(l="0"+l),n<"10"&&(n="0"+n),i<"10"&&(i="0"+i),d<"10"&&(d="0"+d),t("#days").html(l),t("#hours").html(n),t("#minutes").html(i),t("#seconds").html(d)};t("#current-countdown").css("display","block"),h(),setInterval(function(){h()},1e3)}l.getTime()>s.getTime()&&t("#ico-finished").css("display","block"),t('a[href^="#"]').click(function(){t("#nav, #nav-toggle").removeClass("active");var e=t(this).attr("href");return t("html,body").animate({scrollTop:t(e).offset().top-90},400),!1}),t(window).scroll(function(){a()}),a(),t("#buy-tokens-button").click(function(){t("#modals, #modals #buy-tokens-modal, #content").addClass("active"),t("body, html").css("overflow","hidden")}),t("#airdrop-button, .airdrop-information").click(function(){t("#modals, #modals #airdrop-modal, #content").addClass("active"),t("body, html").css("overflow","hidden")}),t("#add-to-wallet-button").click(function(){t("#modals, #modals #add-to-wallet-modal, #content").addClass("active"),t("body, html").css("overflow","hidden")}),t("i.close, button.close").click(function(){t("#modals, #modals > div, #content").removeClass("active"),t("body, html").css("overflow","auto")}),t(document).keyup(function(e){27==e.keyCode&&(t("#modals, #modals > div, .airdrop-information, #content").removeClass("active"),t("body, html").css("overflow","auto"))}),t(document).mouseup(function(e){var a=t("#modals > div");a.is(e.target)||0!==a.has(e.target).length||(t("#modals, #modals > div, #content").removeClass("active"),t("body, html").css("overflow","auto"))}),t("#wallet1").click(function(){t("#add-to-wallet-modal > .body > .container-half > ol").empty(),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Open MetaMask and ensure that the 'Main Ethereum Network' is selected at the top.</li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Click on the 'Tokens' tab.</li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Click 'Add Token'.</li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Enter the 'Contract address' from the right-hand side.</li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Click 'Add' once the 'Token Symbol' and 'Decimals of Precision' fields have autofilled.</li>")}),t("#wallet2").click(function(){t("#add-to-wallet-modal > .body > .container-half > ol").empty(),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Login to imToken and click on the + icon.</li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Click the search icon (magnifying glass) in the top right.</li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Type PLEX in the search bar </li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Click the Add button next to the PLEX token search result.</li>")}),t("#wallet3").click(function(){t("#add-to-wallet-modal > .body > .container-half > ol").empty(),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Select the Contracts tab and click on Watch.</li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Choose Token as the contract type and click next.</li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Under network address, enter the Storeplex Token Contract Address. Enter PLEX Token as contract name and click on Add Contract.</li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Go back to the contracts tab and select the PlexToken contract. In the balanceOf field, enter your wallet address and press Query.</li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("Note: If you hold PLEX Tokens these should automatically display in Parity. This method only needs to be used if this is not the case.")}),t("#wallet4").click(function(){t("#add-to-wallet-modal > .body > .container-half > ol").empty(),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Click on Contracts.</li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Click Watch Token.</li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Enter the Storeplex Token Contract Address, put PLEX Token in the 'Token Name' field, PLEX as the 'Token Symbol' and 2 as the 'Decimal Places'.</li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Press OK.</li>")}),t("#wallet5").click(function(){t("#add-to-wallet-modal > .body > .container-half > ol").empty(),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Load up your wallet in MyEtherWallet.</li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>On the right hand side, click on 'Add Custom Token'.</li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Enter the Storeplex Token Contract Address, put PLEX as the 'Token Symbol' and 2 as the 'Decimas'.</li>"),t("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Click Save.</li>")}),t("#copy-address").click(function(){var e=t("<input>");t("body").append(e),t("#modals > div > .modal").addClass("active"),e.val(t("#eth-address").text()).select(),document.execCommand("copy"),e.remove(),setTimeout(function(){t("#modals > div > .modal").removeClass("active")},1400)}),t("#copy-send-address").click(function(){var e=t("<input>");t("body").append(e),t("#modals > div > .modal").addClass("active"),e.val(t("#eth-send-address").text()).select(),document.execCommand("copy"),e.remove(),setTimeout(function(){t("#modals > div > .modal").removeClass("active")},1400)}),t("#newsletter-form-top, #newsletter-form-bottom").submit(function(e){var a=this;e.preventDefault();var o=t("input:submit",a);t.ajax({url:"newsletter-subscribe.php",method:"POST",data:t(this).serialize(),beforeSend:function(){t("input").attr("disabled",!0),o.attr("disabled",!0)},success:function(e){t(a).parent().append('<div class="alert alert-success">You are now subscribed to our newsletter!</div>'),setTimeout(function(){t("input").attr("disabled",!1),o.attr("disabled",!1),t(".alert").remove(),t(a)[0].reset()},2600)},error:function(e){t(a).parent().append('<div class="alert alert-error">Failed to sign up.</div>'),setTimeout(function(){t("input").attr("disabled",!1),o.attr("disabled",!1),t(".alert").remove()},1800)}})}),t("#airdrop-form").submit(function(e){var a=this;e.preventDefault();var o=t("input:submit",a),l=o.val();t.ajax({url:"airdrop.php",method:"POST",data:t(this).serialize(),beforeSend:function(){t("input").attr("disabled",!0),o.attr("disabled",!0).val("Sending...")},success:function(e){o.val("Successfully sent!").addClass("success"),setTimeout(function(){t("input").attr("disabled",!1),o.attr("disabled",!1).val(l).removeClass("success"),t("#modals, #modals #airdrop-modal").removeClass("active"),t(a)[0].reset()},2600)},error:function(e){o.val("Please try again later.").addClass("error"),setTimeout(function(){t("input").attr("disabled",!1),o.attr("disabled",!1).val(l).removeClass("error")},2e3)}})}),t("ul.faq li").click(function(){t(this).hasClass("active")?(t("ul.faq li:not(this)").removeClass("active"),t(this).removeClass("active")):(t("ul.faq li:not(this)").removeClass("active"),t(this).addClass("active"))})});