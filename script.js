
$(document).ready(function() {
    
    displayQuoteFromArray();

    $("#next_quote").click(function() {
        $('#main').fadeOut(1200, displayQuoteFromArray);
    });

    function displayQuote(response) {
            console.log(response.quote);
            $("#quote").text(response.quote);
            $('#author').text(response.author);

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
	            quote:"It is a familiar and significant saying that a problem well put is half-solved."
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
	            author: "Albert Einstein",
	            quote:"A clever person solves a problem. A wise person avoids it."
	        },
	        {
	            author: "Albert Einstein",
	            quote:"The formulation of the problem is often more essential than its solution, which may be merely a matter of mathematical or experimental skill."
	        },
	        {
	            author: "Atul Gawande",
	            quote:"We always hope for the easy fix: the one simple change that will erase a problem in a stroke. But few things in life work this way. Instead, success requires making a hundred small steps go right."
	        },
	        {
	            author: "Antoine de Saint-Exupery",
	            quote:"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."
	        },
	        {
	            author: "William Shakespeare",
	            quote:"What's in a name? That which we call a rose by any other name would smell as sweet"
	        },
	        {
	            author: "",
	            quote:"There’s more to life than objects."
	        },
	        {
	            author: "",
	            quote:"Pointers point a way. Sometimes the right way, sometimes the wrong way."
	        },
	        {
	            author: "Eric Schmidt",
	            quote:"There's nothing that cannot be found through some search engine or on the Internet somewhere."
	        },
	        {
	            author: "Lao Tzu",
	            quote:"The journey of a thousand miles begins with one step."
	        },
	        {
	            author: "Eric Schmidt",
	            quote:"The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had."
	        },
	        {
	            author: "",
	            quote:"Explain it to a stranger. Even an imaginary one."
	        },
	        {
	            author: "",
	            quote:"Go for a walk."
	        },
	        {
	            author: "",
	            quote:"Working software over not working software."
	        },
	        {
	            author: "Alexander Graham Bell",
	            quote:"Great discoveries and improvements invariably involve the cooperation of many minds."
	        },
	        {
	            author: "Christopher Strachey",
	            quote:"You can't see the semantic wood for the syntactic trees."
	        },
	        {
	            author: "",
	            quote:"Your subconscious is smarter than you are."
	        },
	        {
	            author: "Isaac Newton",
	            quote:"If I have seen further than others, it is by standing upon the shoulders of giants."
	        },
	        {
	            author: "",
	            quote:"The appearance of magic relies on not seeing all the steps to the trick."
	        },
	        {
	            author: "",
	            quote:"When the impossible happens, what changes is our way of seeing."
	        },
	        {
	            author: "",
	            quote:"Most destinations have more than one path leading to them."
	        },
	        {
	            author: "Robert H Schuller",
	            quote:"Again and again, the impossible problem is solved when we see that the problem is only a tough decision waiting to be made."
	        },
	        {
	            author: "Sherlock Holmes",
	            quote:"When you have eliminated the impossible, whatever remains, however improbable, must be the truth."
	        },
	        {
	            author: "Thomas Alba Edison",
	            quote:"I have not failed. I've just found 10,000 ways that won't work."
        } 
        ];
        var random = Math.floor(Math.random() * myQuotes.length);
        displayQuote(myQuotes[random]);
        
    }
    

}); //end of document ready
