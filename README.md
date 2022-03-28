# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Vicki Young

Time spent: 2 hours spent in total

Link to project: 

code: https://glitch.com/edit/#!/vicki-young-prework-light-and-sound-memory-game

live site: https://vicki-young-prework-light-and-sound-memory-game.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Button sound speed made faster (reduced to 0.5 seconds playback sound)
- [x] Answer key button shows the current pattern (primarily implemented for testing new pattern sequences)

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

win game:

![](https://cdn.glitch.global/9d263e4d-d164-47a9-bf84-55f7d9924acf/win%20game.gif?v=1648445451899)

lose game:

![](https://cdn.glitch.global/9d263e4d-d164-47a9-bf84-55f7d9924acf/lose%20game.gif?v=1648445716380)

answer key feature (part 1):

![](https://cdn.glitch.global/9d263e4d-d164-47a9-bf84-55f7d9924acf/answer%20key%20part%201.gif?v=1648446623016)

answer key feature (part 2):

![](https://cdn.glitch.global/9d263e4d-d164-47a9-bf84-55f7d9924acf/answer%20key%20part%202.gif?v=1648446889822)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   I mostly searched up the answer for any problems I was having; most of my knowledge of coding comes from the classes I've taken so far in Python, C, and Java, so applying that knowledge to this project helped me understand JavaScript relatively easily. It was just a matter of understanding the formatting that JavaScript used, and how to make things show up from Javascript to HTML.

- button colors: https://www.rapidtables.com/web/css/css-color.html
- how to add elements to array in javascript: https://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
- how to use javascript Math.random to generate random numbers for pattern array: https://www.w3schools.com/js/js_random.asp
- how to output javascript array information to html: https://www.w3schools.com/js/js_output.asp
- how to add text to buttons: https://html.com/tags/button/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

This project became way more enjoyable for me once I realized that HTML wasn't as overwhelmingly new and complicated as I thought it would be. I have experience in Java, C, and Python, so the aspects of Javascript such as global variables, functions, for loops, and so forth are completely familiar to me. 

On the other hand, I had definitely encountered HTML before but had no understanding whatsoever of how HTML worked, so I was nervous to begin learning it. However, when the first step in the project explained how the opening and closing tags worked, it felt like everything suddenly clicked into place (in my head, I was like "oh so THAT's what it does!"). From there, it became much easier to understand HTML by following the project instructions.

Admittedly, I didn't really fully understand several aspects of HTML once I finished the minimal project requirements. The id="name" and the onclick="showAnswer()" parts were confusing to me, as well as the difference between putting information inside the opening tags versus between the opening and closing tags. But I actually came to understand how the id, onclick, and opening tag information worked once I began to implement the answer key feature, which included the show and hide answer key buttons. Essentially, I overcame the difficulty and reached understanding through further practical implementation out of my own accord, and when I chose to go beyond the given guiding instructions.

As for CSS, it was interesting to learn how to customize the appearance based on the rules created, and I enjoyed learning how to customize button sizes, fonts, and colors beyond the minimal requirement. I think they were pretty easy for me to understand as functions, though the .hidden rule was very new for me to understand, as well as the #gameButtonArea > button rule.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

I've certainly seen HTML used in website formats before, but now that I've gained a little experience with using it myself, I suddenly am immensely interested in learning about how much work goes into making website interfaces look so neat and organized. How would I be able to use HTML to design my own blog, or my own website theme? Could I customize the appearance of any social media apps I'm currently using? And how many other types of mini games could I code using HTML, JavaScript, and CSS? I'd also be interested in learning about how web development is involved with the interfaces for games, such as the menu options, character inventories, or player profiles, for example. Also . . . I don't really like emojis, but how do you code in emojis?

I've also never combined different coding languages in one project before; I didn't actually realize how this worked until this project. I think I'm curious to further learn the language structures and guidelines which create the bridges crossing over between these different languages, as well as how to combine other coding languages as well--such as Java, C, or Python, which are the languages I have experience in.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

Upon first understanding the purpose of the game, I immediately thought of the Start Reactor task in Among Us, otherwise known as the Simon Says task. If I had the time, I would definitely want to try to make my project resemble the Start Reactor task in appearance and gameplay as much as possible, just out of curiosity to see how much work and detail is needed behind it. This would require having two separate sets of 9 buttons, one set on the left for the computer to display each button sequence, and one set on the right, for the player to input their answer. The pattern sequence would be changed to be only a maximum of five buttons long, though faster in sound and animation, and the there would be a row of five lights above the buttons to indicate how many rounds have passed. Each light will light up once a round is successfully completed. 


## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)

## License

    Copyright Vicki Young

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
