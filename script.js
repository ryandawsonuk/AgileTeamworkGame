
$(document).ready(function() {
    
    nextPanel()

    $("#next_quote").click(function() {
        nextPanel()
    });

    function updatePanel(situations, situationIndex) {
            console.log(situations[situationIndex]);
            
            updated = updatePerspectives(situations[situationIndex])
            
            if ( !updated ) {
                situationIndex++
                if ( situationIndex == situations.length ) {
                    situationIndex = 0
                }
                $('#main').fadeOut(100);
                clearAllPerspectives()
                updatePerspectives(situations[situationIndex])
            }
            
            $("#situationnum").text(situations[situationIndex].situationNum);
            $('#situation').text(situations[situationIndex].situation);
            


            $('#main').fadeIn(1200); 
        }
	
	function clearAllPerspectives() {

        $("#perspective0").text("")
        $("#perspective1").text("")
        $("#perspective2").text("")
        $("#perspective3").text("")
        $("#perspective4").text("")
        
        $("#perspective0").hide()
        $("#perspective1").hide()
        $("#perspective2").hide()
        $("#perspective3").hide()
        $("#perspective4").hide()
        
        $("#perspectivehr0").hide()
        $("#perspectivehr1").hide()
        $("#perspectivehr2").hide()
        $("#perspectivehr3").hide()
        $("#perspectivehr4").hide()

    }
	
	function updatePerspectives(situation) {
        
        var updated = false
        for (let i = 0; i < situation.perspectives.length; i++) {

            var perspid = "#perspective"+i
            if ( $(perspid).text() == "" ) {
                $(perspid).text(situation.perspectives[i])
                $(perspid).fadeIn(1200)
                $("#perspectivehr"+i).fadeIn(1200)
                updated = true
                console.log("set "+perspid+" to "+situation.perspectives[i])
                break
            }
        }
        return updated
        
    }
	
    function nextPanel() {
        var situations = [
	        {
	            situation: "The Earth is about to be invaded by giant space ants",
	            perspectives: ["I, for one, welcome our new insect overlords",
                "Perhaps they come in peace",
                "Let's build a giant laser",
                "We need a giant space ant-eater!",
                "Let's offer them sugar in exchange for our freedom"],
                situationNum: "Demo Situation 0"
	        },
	        {
	            situation: "This story is hard to define. We can work together as a team to define it.",
	            perspectives:["The Product Owner is responsible for stories",
                "Context-switching hurts productivity",
                "Responsibility for delivery is collective",
                "Why can't developers help with defining a story?",
                "What matters is working software"],
                situationNum: "Situation 1"
            },
            {
	            situation: "We need the team to work the weekend. Just this once.",
	            perspectives:["Why is this so urgent?",
                "Weekend work will wear the team down if we do it regularly.",
                "How did this get missed in previous plans?",
                "We need to ask individuals without putting them on the spot",
                "How do we plan better in future?"],
                situationNum: "Situation 2"
            }
        ];
        
        var situationIndex = $("#situationnum").text().split(" ").pop()
        console.log("situation is "+situationIndex)
        updatePanel(situations, situationIndex);
        
    }
    

}); //end of document ready
