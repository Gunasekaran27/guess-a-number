var Msg1 = document.getElementById("Message1") ;
var Msg2 = document.getElementById("Message2") ;
var Msg3 = document.getElementById("Message3") ;
var Answer = Math.floor(Math.random() * 1000) + 1;
var No_of_guesses = 0;
var Guesses_num = [];

function Play() {
    var User_guess = document.getElementById("Guess").value;
    if (User_guess < 1 || User_guess > 100) {
        Alert("Please Enter A Number Between 1 To 100");
    } 
    else {
        Guesses_num.push(User_guess);
        No_of_guesses += 1;
        if (User_guess < Answer) {
            Msg1.innerText = "Your Guess Is Too Low";
            Msg2.innerText = "No. Of Guesses : " + No_of_guesses;
            Msg3.innerText = "Guessed Number Are: " + Guesses_num;
        } else if (User_guess > Answer) {
            Msg1.TextContent = "Your Guess Is Too High";
            Msg2.TextContent = "No. Of Guesses : " + No_of_guesses;
            Msg3.TextContent = "Guessed Number Are: " + Guesses_num;
        } else if (User_guess == Answer) {
            Msg1.TextContent = "Yahhhh You Won It!!" ;
            Msg2.TextContent = "The Number Was " + Answer ; 
            Msg3.TextContent = " You Guessd It In " + No_of_guesses + "Guesses";
        }
    }
}