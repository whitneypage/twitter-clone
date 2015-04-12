$(document).ready(function() {


	$('#char-count').hide();
	$('#tweet-submit').hide();
	$('.tweet-actions').hide();


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

		$('#stream').prepend(newTweet);
			//"<div class="tweet"> <div class="content"> <img class="avatar" src="img/alagoon.jpg" /> <strong class="fullname">Whitney Page</strong> <span class="username">@wpg</span> <p class="tweet-text">" + theTweet + "</p>" "<div class="tweet-actions"> <ul><li><span class="icon action-reply"></span> Reply</li> <li><span class="icon action-retweet"></span> Retweet</li> <li><span class="icon action-favorite"></span> Favorite</li> <li><span class="icon action-more"></span> More</li> </ul> </div><div class="stats"> <div class="retweets"> <p class="num-retweets">30</p> <p>RETWEETS</p> </div> <div class="favorites"> <p class="num-favorites">6</p> <p>FAVORITES</p> </div> <div class="users-interact"><div>";





	})
    
   

     $('.tweet')
     .mouseenter(function() {
   	  $('.tweet-actions').show();
   	   })
   	  .mouseleave(function() {
   	  	$('.tweet-actions').hide();
   	  })
 


     



});

  
		












//});


