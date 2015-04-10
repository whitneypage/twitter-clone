$(document).ready(function() {


	$('#char-count').hide();
	$('#tweet-submit').hide();

	$('.tweet-compose').blur(function() {
		$(this).css('height', '2.5em');
		$('#char-count').hide();
	    $('#tweet-submit').hide();

     });

	$('.tweet-compose').focus(function() {
		$(this).css('height', '5em');
		$('#char-count').show();
	    $('#tweet-submit').show();

     });



   


	$('.tweet-compose').keyup(function() {
		  var maxChar = 140;
          var count = $('#char-count');
          var chars = $(this).val().length;
          if(chars > maxChar - 10) {
            count.addClass('over');
        } else {
        	count.removeClass('over');
        }

        count.text(maxChar - chars);
	})











});


