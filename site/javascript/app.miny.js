// Copyright (C) 2017 - 2018 {Storeplex} [support@storeplex.com]
//
// This file is part of {Storeplex Landing Project}
//
// This file cannot be copied and/or distributed without the
// express permission of {Storeplex}

/*global $ */
jQuery(document).ready(function($) {
  "use strict";

  // Bounties handler
  $('#bounties-form').submit(function(e) {
    var form = this
    e.preventDefault()
    var $send = $('input:submit', form)
    var defaultText = $send.val()

    $.ajax({
      url: 'bounties.php',
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
});
