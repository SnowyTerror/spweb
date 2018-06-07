// Copyright (C) 2017 - 2018 {Storeplex} [support@storeplex.com]
//
// This file is part of {Storeplex Landing Project}
//
// This file cannot be copied and/or distributed without the
// express permission of {Storeplex}

/*global $ */
jQuery(document).ready(function($) {
  "use strict";

  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.register('../sw.js')
  // }

  $('.airdrop-information').css({
    'transform': 'translateX(0)',
    'opacity': '1'
  })

  $('.airdrop-information p').css('opacity', '1')
  $('.social-links').css('opacity', '1')

  // URL extention Modal
  if(window.location.href.indexOf('/#airdrop') != -1) {
    $('#modals, #modals #airdrop-modal').addClass('active');
    $('body, html').css('overflow', 'hidden')
  }

  // Mobile toggle
  $('#nav-toggle').click(function(e) {
    e.stopPropagation();
    $('#nav, #nav-toggle').toggleClass('active');
  });

  // Remove mobile nav
  var $window = $(window);
  function checkWidth() {
    var windowsize = $window.width();

    if(windowsize > 880) {
      $('#nav, #nav-toggle').removeClass('active');
    }
  }
  checkWidth();
  $(window).resize(checkWidth);

  // Sale counter
  var currentDate = new Date();

  var preICOStart = new Date("11 June 2018 18:00:0");
  var preICOEnd = new Date("25 June 2018 00:00:0");

  var ICOStart = new Date("02 July 2018 18:00:0");
  var ICOEnd = new Date("30 July 2018 00:00:0");

  // Pre ICO Sale
  if (currentDate.getTime() < preICOStart.getTime()) {
    $('#next-countdown').css('display', 'block');
    nextSaleTimer();
    function nextSaleTimer() {
      var nextSaleTimer = preICOStart;
      nextSaleTimer = (Date.parse(nextSaleTimer) / 1000);

      var currentTime = new Date();
      currentTime = (Date.parse(currentTime) / 1000);
      var timeLeft = nextSaleTimer - currentTime;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
      var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
      var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

      if(days < "10"){days = "0" + days}
      if(hours < "10"){hours = "0" + hours}
      if(minutes < "10"){minutes = "0" + minutes}
      if(seconds < "10"){seconds = "0" + seconds}

      $("#days-next").html(days);
      $("#hours-next").html(hours);
      $("#minutes-next").html(minutes);
      $("#seconds-next").html(seconds);
    }
    setInterval(function(){ nextSaleTimer()}, 1000);
  }

  // Pre ICO Deadline
  if (currentDate.getTime() > preICOStart.getTime() && currentDate.getTime() < preICOEnd.getTime()) {
    $('#current-countdown').css('display', 'block');
    deadlineTimer();
    function deadlineTimer() {
      var deadline = preICOEnd;
      deadline = (Date.parse(deadline) / 1000);

      var currentTime = new Date();
      currentTime = (Date.parse(currentTime) / 1000);
      var timeLeft = deadline - currentTime;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
      var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
      var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

      if(days < "10"){days = "0" + days}
      if(hours < "10"){hours = "0" + hours}
      if(minutes < "10"){minutes = "0" + minutes}
      if(seconds < "10"){seconds = "0" + seconds}

      $("#days").html(days);
      $("#hours").html(hours);
      $("#minutes").html(minutes);
      $("#seconds").html(seconds);
    }
    setInterval(function(){ deadlineTimer()}, 1000);
  }

  // ICO Sale
  if (currentDate.getTime() > preICOEnd.getTime() && currentDate.getTime() < ICOStart.getTime()) {
    $('#next-countdown').css('display', 'block');
    nextSaleTimer();
    function nextSaleTimer() {
      var nextSaleTimer = ICOStart;
      nextSaleTimer = (Date.parse(nextSaleTimer) / 1000);

      var currentTime = new Date();
      currentTime = (Date.parse(currentTime) / 1000);
      var timeLeft = nextSaleTimer - currentTime;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
      var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
      var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

      if(days < "10"){days = "0" + days}
      if(hours < "10"){hours = "0" + hours}
      if(minutes < "10"){minutes = "0" + minutes}
      if(seconds < "10"){seconds = "0" + seconds}

      $("#days-next").html(days);
      $("#hours-next").html(hours);
      $("#minutes-next").html(minutes);
      $("#seconds-next").html(seconds);
    }
    setInterval(function(){ nextSaleTimer()}, 1000);
  }

  // ICO Deadline
  if (currentDate.getTime() > ICOStart.getTime() && currentDate.getTime() < ICOEnd.getTime()) {
    $('#current-countdown').css('display', 'block');
    deadlineTimer();
    function deadlineTimer() {
      var deadline = ICOEnd;
      deadline = (Date.parse(deadline) / 1000);

      var currentTime = new Date();
      currentTime = (Date.parse(currentTime) / 1000);
      var timeLeft = deadline - currentTime;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
      var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
      var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

      if(days < "10"){days = "0" + days}
      if(hours < "10"){hours = "0" + hours}
      if(minutes < "10"){minutes = "0" + minutes}
      if(seconds < "10"){seconds = "0" + seconds}

      $("#days").html(days);
      $("#hours").html(hours);
      $("#minutes").html(minutes);
      $("#seconds").html(seconds);
    }
    setInterval(function(){ deadlineTimer()}, 1000);
  }

  // window.addEventListener('load', function() {
  //   $('.lazy').Lazy({
  //     effect: 'fadeIn',
  //     visibleOnly: true,
  //     delay: 500
  //   });
  // })

  // ICO Deadline - Finished
  if (currentDate.getTime() > ICOEnd.getTime()) {
  	$('#ico-finished').css('display', 'block');
  }

  // Smooth scroll
  $('a[href^="#"]').click(function() {
    $('#nav, #nav-toggle').removeClass('active');
    var scroll = $(this).attr("href");
    $('html,body').animate({
      scrollTop:$(scroll).offset().top - 90
    }, 400);
    return false;
  });

  // Parallax section Bubbles
  $(window).scroll(function() {
    parallax()
  })
  parallax()

  function parallax() {
    var wScroll = $(window).scrollTop()

    // Lazy load Images
    // if(wScroll > 800) {
    //
    // }

    // Airdrop Live Notification
    if(wScroll < 200) {
      $('.airdrop-information').css({
        'opacity': '1',
        'transform': 'translateX(0)'
      })
      $('.social-links').css({
        'opacity': '1',
        'transform': 'translateX(0)'
      })
    } else if(wScroll > $('section#faq').offset().top - ($(window).height() / 1.5)) {
      $('.social-links').css({
        'opacity': '1',
        'transform': 'translateX(0%)'
      })
    } else {
      $('.airdrop-information').css({
        'opacity': '0',
        'transform': 'translateX(-100%)'
      })
      $('.social-links').css({
        'opacity': '0',
        'transform': 'translateX(100%)'
      })
    }

    //Distribution Progress animate
    if(wScroll > $('section#distribution-progress').offset().top - ($(window).height() / 1.5)) {
      $('.distribution-item > .image-area > div').removeClass('animate')
    }

    // Token Distribution Bubbles
    $('#token-distribution .bubbles > svg:first-child').css('top', -25 + (wScroll * 0.012) + 'rem')
    $('#token-distribution .bubbles > svg:last-child').css('top', (wScroll * 0.008) + 'rem')

    // Roadmap Bubbles
    $('section#roadmap .bubbles > svg:first-child').css('top', -70 + (wScroll * 0.014) + 'rem')
    $('section#roadmap .bubbles > svg:nth-child(2)').css('top', -45 + (wScroll * 0.012) + 'rem')
    $('section#roadmap .bubbles > svg:last-child').css('top', (wScroll * 0.016) + 'rem')

    // Why you need Plex Bubbles
    $('section#why-you-need-plex .bubbles > svg:first-child').css('top', -155 + (wScroll * 0.025) + 'rem')

    // Funds Distribution Bubbles
    $('section#funds-distribution .bubbles > svg:first-child').css('top', -155 + (wScroll * 0.025) + 'rem')
  }

  // Modal Interaction
  // -- Buy Tokens
  $('#buy-tokens-button').click(function() {
    $('#modals, #modals #buy-tokens-modal, #content').addClass('active')
    $('body, html').css('overflow', 'hidden')
  })

  // -- Airdrop
  $('#airdrop-button, .airdrop-information').click(function() {
    $('#modals, #modals #airdrop-modal, #content').addClass('active')
    $('body, html').css('overflow', 'hidden')
  })

  // -- Add to Wallet
  $('#add-to-wallet-button').click(function() {
    $('#modals, #modals #add-to-wallet-modal, #content').addClass('active')
    $('body, html').css('overflow', 'hidden')
  })

  // -- Closes Modals
  $('i.close, button.close').click(function() {
    $('#modals, #modals > div, #content').removeClass('active')
    $('body, html').css('overflow', 'auto')
  })

  // -- Closes Modals (escape key)
  $(document).keyup(function(e) {
    if(e.keyCode == 27) {
      $('#modals, #modals > div, .airdrop-information, #content').removeClass('active')
      $('body, html').css('overflow', 'auto')
    }
  })

  // -- Closes Modals (off focus)
  $(document).mouseup(function (e) {
    var container = $("#modals > div");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('#modals, #modals > div, #content').removeClass('active')
      $('body, html').css('overflow', 'auto')
    }
  });

  $("#wallet1").click(function() {
    $("#add-to-wallet-modal > .body > .container-half > ol").empty();
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Open MetaMask and ensure that the 'Main Ethereum Network' is selected at the top.</li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Click on the 'Tokens' tab.</li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Click 'Add Token'.</li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Enter the 'Contract address' from the right-hand side.</li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Click 'Add' once the 'Token Symbol' and 'Decimals of Precision' fields have autofilled.</li>");
  });

  $("#wallet2").click(function() {
    $("#add-to-wallet-modal > .body > .container-half > ol").empty();
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Login to imToken and click on the + icon.</li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Click the search icon (magnifying glass) in the top right.</li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Type PLEX in the search bar </li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Click the Add button next to the PLEX token search result.</li>");
  });

  $("#wallet3").click(function() {
    $("#add-to-wallet-modal > .body > .container-half > ol").empty();
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Select the Contracts tab and click on Watch.</li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Choose Token as the contract type and click next.</li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Under network address, enter the Storeplex Token Contract Address. Enter PLEX Token as contract name and click on Add Contract.</li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Go back to the contracts tab and select the PlexToken contract. In the balanceOf field, enter your wallet address and press Query.</li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("Note: If you hold PLEX Tokens these should automatically display in Parity. This method only needs to be used if this is not the case.");
  });

  $("#wallet4").click(function() {
    $("#add-to-wallet-modal > .body > .container-half > ol").empty();
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Click on Contracts.</li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Click Watch Token.</li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Enter the Storeplex Token Contract Address, put PLEX Token in the 'Token Name' field, PLEX as the 'Token Symbol' and 2 as the 'Decimal Places'.</li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Press OK.</li>");
  });

  $("#wallet5").click(function() {
    $("#add-to-wallet-modal > .body > .container-half > ol").empty();
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Load up your wallet in MyEtherWallet.</li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>On the right hand side, click on 'Add Custom Token'.</li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Enter the Storeplex Token Contract Address, put PLEX as the 'Token Symbol' and 2 as the 'Decimas'.</li>");
    $("#add-to-wallet-modal > .body > .container-half > ol").append("<li>Click Save.</li>");
  });

  // -- Copy Eth Address to Clipboard
  $('#copy-address').click(function() {
    var $temp = $('<input>');
    $('body').append($temp);
    $('#modals > div > .modal').addClass('active')
    $temp.val($('#eth-address').text()).select();
    document.execCommand('copy');
    $temp.remove();

    // Reset delay
    setTimeout(function() {
      $('#modals > div > .modal').removeClass('active')
    }, 1400)
  });

  $('#copy-send-address').click(function() {
    var $tempSend = $('<input>');
    $('body').append($tempSend);
    $('#modals > div > .modal').addClass('active')
    $tempSend.val($('#eth-send-address').text()).select();
    document.execCommand('copy');
    $tempSend.remove();

    // Reset delay
    setTimeout(function() {
      $('#modals > div > .modal').removeClass('active')
    }, 1400)
  });

  // Features slider
  // var features = $('#features-reel li').length,
  //     featureAreaWidth = features * 100,
  //     featureWidth = 100 / features,
  //     amountPerView = 3,
  //     featureCurrentPosition = 0,
  //     reelTimer = 6000,
  //     reelState = false;
  //
  // function checkWidth() {
  //   var windowsize = $window.width();
  //
  //   if (windowsize > 1280) {
  //     amountPerView = "3";
  //   }
  //   if (windowsize <= 1280) {
  //     amountPerView = "2";
  //   }
  //   if (windowsize < 960) {
  //     amountPerView = "1";
  //   }
  //
  //   var featureFinalWidth = featureWidth / amountPerView
  //
  //   $('#features-reel').css('width', featureAreaWidth  + '%')
  //   $('#features-reel li').css('width', featureFinalWidth + '%')
  // }
  // checkWidth();
  // $(window).resize(checkWidth);
  //
  // var featureMaximumPosition = (featureAreaWidth / amountPerView - 100) * (-1);
  //
  //
  //
  // function featurePositionCheck() {
  //   if(featureCurrentPosition == 0) {
  //     $('#arrow-left').addClass('disabled')
  //   } else {
  //     $('#arrow-left').removeClass('disabled')
  //   }
  //
  //   if(featureCurrentPosition == featureMaximumPosition) {
  //     $('#arrow-right').addClass('disabled')
  //   } else {
  //     $('#arrow-right').removeClass('disabled')
  //   }
  // }
  // featurePositionCheck()
  //
  // // Continues Scrolling Feature Reel
  // function unpauseReel() {
  //   reelState = false
  // }
  //
  // window.setInterval(function() {
  //   if(!reelState) {
  //     if(featureCurrentPosition <= 0 && featureCurrentPosition > featureMaximumPosition) {
  //       featureCurrentPosition = featureCurrentPosition - 100
  //       featurePositionCheck()
  //       $('#features-reel').css('left',  featureCurrentPosition + '%')
  //     }else {
  //       featureCurrentPosition = 0
  //       featurePositionCheck()
  //       $('#features-reel').css('left', featureCurrentPosition + '%')
  //     }
  //   }
  // }, reelTimer)
  //
  // $('#arrow-left').click(function() {
  //   featureCurrentPosition = featureCurrentPosition + 100
  //   featurePositionCheck()
  //   setTimeout(unpauseReel, 4000)
  //   reelState = true
  //   $('#features-reel').css('left', featureCurrentPosition + '%')
  // })
  //
  // $('#arrow-right').click(function() {
  //   featureCurrentPosition = featureCurrentPosition - 100
  //   featurePositionCheck()
  //   setTimeout(unpauseReel, 4000)
  //   reelState = true
  //   $('#features-reel').css('left', featureCurrentPosition + '%')
  // })

  // Newsletter Handler
  $('#newsletter-form-top, #newsletter-form-bottom').submit(function(e) {
    var form = this
    e.preventDefault()
    var $send = $('input:submit', form)

    $.ajax({
      url: 'newsletter-subscribe.php',
      method: 'POST',
      data: $(this).serialize(),
      beforeSend: function() {
        // Disables user Interaction
        $('input').attr('disabled', true)
        $send.attr('disabled', true)
      },
      success: function(data) {
        // Adds feedback alert
        $(form).parent().append('<div class="alert alert-success">You are now subscribed to our newsletter!</div>')

        // Reset delay
        setTimeout(function() {
          // Enables user Interaction
          $('input').attr('disabled', false)
          $send.attr('disabled', false)

          // Removes feedback alert
          $('.alert').remove()

          // Clears form input
          $(form)[0].reset()
        }, 2600)
      },
      error: function(err) {
        // Adds feedback alert
        $(form).parent().append('<div class="alert alert-error">Failed to sign up.</div>')

        // Reset delay
        setTimeout(function() {
          // Enables user Interaction
          $('input').attr('disabled', false)
          $send.attr('disabled', false)

          // Removes feedback alert
          $('.alert').remove()
        }, 1800)
      }
    })
  })

  // Airdrop handler
  $('#airdrop-form').submit(function(e) {
    var form = this
    e.preventDefault()
    var $send = $('input:submit', form)
    var defaultText = $send.val()

    $.ajax({
      url: 'airdrop.php',
      method: 'POST',
      data: $(this).serialize(),
      beforeSend: function() {
        // Disables user Interaction
        $('input').attr('disabled', true)
        $send.attr('disabled', true).val('Sending...')
      },
      success: function(data) {
        // Adds feedback alert
        $send.val('Successfully sent!').addClass('success')

        // Reset delay
        setTimeout(function() {
          // Enables user Interaction
          $('input').attr('disabled', false)
          $send.attr('disabled', false).val(defaultText).removeClass('success')

          // Closes Modal
          $('#modals, #modals #airdrop-modal').removeClass('active')

          // Clears form input
          $(form)[0].reset()
        }, 2600)
      },
      error: function(err) {
        // Adds feedback alert
        $send.val('Please try again later.').addClass('error')

        // Reset delay
        setTimeout(function() {
          // Enables user Interaction
          $('input').attr('disabled', false)
          $send.attr('disabled', false).val(defaultText).removeClass('error')
        }, 2000)
      }
    })
  })

  // FAQ
  $('ul.faq li').click(function() {
    if($(this).hasClass('active')) {
      $('ul.faq li:not(this)').removeClass('active');
      $(this).removeClass('active');
    } else {
      $('ul.faq li:not(this)').removeClass('active');
      $(this).addClass('active');
    }
  });


});
