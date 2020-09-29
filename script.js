
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
                "Weekend work will wear the team down if we do it regularly",
                "How did this get missed in previous plans?",
                "We need to ask individuals without putting them on the spot",
                "How do we plan better in future?"],
                situationNum: "Situation 2"
            },
            {
	            situation: "What do you mean it won't scale to that many users?",
	            perspectives:["We haven't tested it, that wasn't listed as a non-functional requirement",
                "We can put in a story to assess what it will scale to",
                "Is that the number it needs to scale to? When would we expect that load?",
                "Can we influence how much traffic will come when? Could we make the increase more staggered?",
                "Is there a quick way to reduce the risk of failure from increased traffic?"],
                situationNum: "Situation 3"
            },
            {
	            situation: "We would normally do more testing but we need to get this feature out ASAP",
	            perspectives:["This could be tech debt that we'll really struggle to pay down",
                "As someone who cares about testing, I can't sign this off",
                "What is ASAP and what's the impact of waiting?",
                "What could go wrong with this in production? What would the impacts be?",
                "Can we do a risk assessment?"],
                situationNum: "Situation 4"
            },
            {
	            situation: "We can't keep waiting for that team to make the change. Let's write our own version of their service",
	            perspectives:["We'll be judged on whether we deliver to schedule",
                "What would we say if another team wrote a version of one of our services?",
                "How soon is this needed and does the other team understand the urgency?",
                "Do we have a route of escalation?",
                "Could we offer to help or trade any work?"],
                situationNum: "Situation 5"
            },
            {
	            situation: "There's nobody from UX available right now. You'll just have to put the story on hold",
	            perspectives:["Why is there nobody available? Why isn't this a priority?",
                "Could we do a design and submit it to someone from UX to review?",
                "What would be the cost of rework if we had to change the design later?",
                "What is the cost of putting the work on hold?",
                "Can we do an initial version and get a sanity check from UX?"],
                situationNum: "Situation 6"
            },
            {
	            situation: "We're adding two new developers to the team. So the team should commit to proportionally more story points",
	            perspectives:["Theyr'e not fully ramped-up yet",
                "The more devs you add, the less each new one boosts output, due to communication overhead",
                "Ramp-up time could mean a net drain in the short term",
                "Maybe we can find tasks that don't require much background knowledge to get started with",
                "We need to skill up the new Devs properly and we'll try to document it to reduce ramp-up in the future"],
                situationNum: "Situation 7"
            },
            {
	            situation: "Developers should document how to use the system. They wrote it so they must know best how to use it",
	            perspectives:["Devs might know how they thought features would be used but have they seen the whole context?",
                "The person that wrote the stories knows about the use cases and the context behind them",
                "Whoever tested it must know how to use it",
                "Could some of the key users help with documentation?",
                "Isn't responsibility for delivery shared across the whole team?"],
                situationNum: "Situation 8"
            }
        ];
        
        var situationIndex = $("#situationnum").text().split(" ").pop()
        console.log("situation is "+situationIndex)
        updatePanel(situations, situationIndex);
        
    }
    

}); //end of document ready
