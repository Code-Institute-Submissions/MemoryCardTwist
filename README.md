# Memory Card Twist

For my second Milestone Project, I have decided to create a Memory Game, with two outcomes of winning.
Either by matching all the cards, or guessing a String of Characters that will be revealed when a successful match as been made.

# Sources

## Bootstrap
I will be using Bootstrap Version 4.3, I have linked the css and js sources into my index.html

## layout
There will be four elements

### Nav Bar
This will be designed to allow users to Start New Games, and Pause the Game.  There are also turn and timer counts also.  This final element will be the ability to enter the random string of characters to make that you can complete the game.

### Game Area
This is where the game is actually housed in.

I have tried to create a grid of 4 by 6, and as my Card faces I have used the actual code as the image.

To keep in with the computing theme, the card values are 1 to 12 in Binary.  Instead of the 1 - 12 or A - L.

I have completed the basic game where, when you click on 2 matching cards they will disappear and reveal the board area underneath.  I will be adding the random characters in later.

I have added the ability for the Player to add their name, this will be used for the Leaderboard later on.

I have nearly completed the Leaderboard just need to add the ability for it to check to sort on the amount to turns taken.

I have completed the Leaderboard, i have also generated the random string and created the function to check that its correct.

### Leaderboard Area
For the competitive players this allows them to see whos fastest.

I have used JS to output HTML so that the table is handled in an array before outputting.
 
I have currently completed what i need to do with the Leaderboard, however I will try to improve the code.

### Dev Area
This is for the developer aka me to leave some information.

# Changes

### Nav Bar
I have taken out the timer as this could be added in at a later date for the really competitive players.  I thought it was best just to stick to one way of recording the winners outcome.  Plus I thought it might be confusing in the leaderboard.

## Support

### Adam Khoury
He created a video tutorial for understanding of how to build the initial game.

### Fireship
https://youtu.be/u21W_tfPVrY - This is Tips on how to use Debugger in my IDE Visual Studio Code.  This elimated the need for Jasmine Testing.

### Slack
Thank you Kitty_Lead for some improvements that I hadn;'t thought of.

# Things to do
look at improving the code for the leaderboard JS
working on the Readme
Jasmine testing
