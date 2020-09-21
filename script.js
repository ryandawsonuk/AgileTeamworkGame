
$(document).ready(function() {
    
    displayQuoteFromArray();

    $("#next_quote").click(function() {
        $('#main').fadeOut(1200, displayQuoteFromArray);
    });

    function displayQuote(response) {
            console.log(response.quote);
            $("#quote").text(response.quote);
            $('#author').text(response.author);
            //update the tweet href
            tweetQuote();
            $('#main').fadeIn(1200); 
        }
	
    function displayQuoteFromArray() {
        var myQuotes = [
	        {
	            author: "C S Lewis",
	            quote:"A sum can be put right; but only by going back till you find the error and working it afresh from that point, never by simply going on."
	        },
	        {
	            author: "John Dewey",
	            quote:"A problem we’ll stated is a problem half solved."
	        },
	        {
	            author: "",
	            quote:"Sometimes the boring way is best."
	        },
	        {
	            author: "",
	            quote:"Take it apart, one piece at a time."
	        },
	        {
	            author: "Thomas Alba Edison",
	            quote:"I have not failed. I've just found 10,000 ways that won't work."
        } 
        ];
        var random = Math.floor(Math.random() * 5);
        displayQuote(myQuotes[random]);
        
    }
    
    function tweetQuote() {
        var twitterURL = 'https://twitter.com/intent/tweet?hashtags=quotes,freeCodeCamp&related=freecodecamp&text="';
        var quote = $("#quote").text();
        var author = $('#author').text();
        twitterURL +=quote +'" - '+ author;
        

        //attach it the URL to the href attribute
        $('#tweet').attr('href', twitterURL);
    }
}); //end of document ready
