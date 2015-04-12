$(document).ready(function() {


	$('#char-count').hide();
	$('#tweet-submit').hide();
	$('.tweet-actions').hide();
	$('.stats').hide();


	$('.tweet-compose').focus(function() {
		$(this).css('height', '5em');
		$('#char-count').show();
	    $('#tweet-submit').show();

     });

     

          var maxChar = 140;
          var count = $('#char-count');
          


	$('.tweet-compose').keyup(function() {
          var chars = $(this).val().length;
          if(chars >= maxChar - 10) {
            $('#char-count').css('color', 'red');
        } else {
        	$('#char-count').css('color', '#999');        
        } 
        count.text(maxChar - chars);
        console.log (typeof $('#char-count').text());

        if(count.text() === '0') {
			$('#tweet-submit').attr('disabled', 'disabled');
		} else {
			$('#tweet-submit').removeAttr('disabled');
		}

	})


    //if (tweet) {

	$('#tweet-submit').click(function() {
		var theTweet= $('textarea').val();
		console.log(theTweet);

		$('#stream').prepend(theTweet);





	})
    
   

     $('.tweet').mouseenter(function() {
     	$(this).find($('.tweet-actions')).show();
     })
     
     $('.tweet').mouseleave(function() {
     	$(this).find($('.tweet-actions')).hide();
     })
 
     
     
     $('.tweet').click(function() {
     	$(this).find($('.stats')).show();
     })



});

  
		












//});


