$(document).ready(function() {


	$('#char-count').hide();
	$('#tweet-submit').hide();
	$('.tweet-actions').hide();
	$('.stats').hide();
    $('.reply').hide();


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

	/*$('#tweet-submit').click(function() {
		var pic = $('#profile-summary avatar').attr('src');
        var name = $('profile-summary p').text() - " ";
        var userName = $('#profile-summary p').text();
        var tweet = $(".tweet-compose").val();
        var numRet = 0;
        var numFav = 0;
        var time = "1:04pm - 19 Sept 14";


        $(stream).prepend (
            <div class="tweet">
                        <div class="content">
                            <img class="avatar" src="img/funwatercat.jpg" />
                            <strong class="fullname">The Onion</strong>
                            <span class="username">@theonion</span>
                            <p class="tweet-text">“I'm able to speak confidently about a wide range of subjects, so it’s probably hard for most women to follow.” http://onion.com/1aWfKwf </p>
                            <div class="tweet-actions">
                                <ul>
                                    <li><span class="icon action-reply"></span> Reply</li>
                                    <li><span class="icon action-retweet"></span> Retweet</li>
                                    <li><span class="icon action-favorite"></span> Favorite</li>
                                    <li><span class="icon action-more"></span> More</li>
                                </ul>
                            </div>
                            <div class="stats">
                                <div class="retweets">
                                    <p class="num-retweets">30</p>
                                    <p>RETWEETS</p>
                                </div>
                                <div class="favorites">
                                    <p class="num-favorites">6</p>
                                    <p>FAVORITES</p>
                                </div>
                                <div class="users-interact">
                                    <div>
                                        <img src="img/jennyshen.jpg" />
                                        <img src="img/damenleeturks.jpg" />
                                    </div>
                                </div>
                                <div class="time">
                                    1:04 PM - 19 Sep 13
                                </div>
                            </div>
                            <div class="reply">
                                <img class="avatar" src="img/alagoon.jpg" />
                                <textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>
                            </div>
                        </div>
                    </div>*/



            //);
    
   

     $('.tweet').mouseenter(function() {
     	$(this).find($('.tweet-actions')).show();
     })
     
     $('.tweet').mouseleave(function() {
     	$(this).find($('.tweet-actions')).hide();
     })
 
     
     
     $('.tweet').click(function() {
     	$(this).find($('.stats')).show();
     })

      $('.tweet').click(function() {
        $(this).find($('.reply')).show();
     })



});

  
		












//});


