# Wound Care Trivia

The purpose of this quiz is to provide a means to check the users' current knowledge regarding wound care management. This tool may be useful to nursing students, healthcare educators, newly qualified nurses, and even experienced nurses looking to identify lacunas in their knowledge to address the patient's needs in a more efficient, effective, and safer manner. Although the user is encouraged to pick their respective answers based on their knowledge, the tool also provides a rationale for each correct answer, to ensure the user gets the chance to learn from the questions presented. A final score will be provided at the end of the quiz, which will provide an indication of the user's performance.

[Wound Care Trivia Link](https://joelchan13.github.io/wound-care-trivia/)

![Responsive Mockup]( https://github.com/JoelChan13/wound-care-trivia/blob/main/assets/images/wound-care-trivia-index-mockup.jpg)

## Features

### Start

- The start button is featured at the center of the home page and prompts the commencement of the quiz.
- Upon commencing the quiz, the user is prompted to submit a username, which is stored in the local storage.

### High Scores

- The high scores button is featured at the center of the home page, below the Start button and directs the user to the high scores page.
- On pressing the high scores button, the user is taken to the high scores page, which retrieves the top 5 results, together with their respective username, from the local storage.

![Start & High Score Buttons](https://github.com/JoelChan13/wound-care-trivia/blob/main/assets/images/wound-care-trivia-index-mockup.jpg)

![High Scores Page]( https://github.com/JoelChan13/wound-care-trivia/blob/main/assets/images/wound-care-trivia-highscores-mockup.png)

### Answer Selection & Next Buttons

- The answers are shuffled and can be selected by clicking on them.
- Upon clicking the selected answer, the answer will turn green, if correct, or red, if incorrect, whilst also presenting the next button.
- The user is not allowed to press any other answer once the selection has been made.
- A rationale, highlighted in green, is provided after every answer is submitted to provide further information to the user.
- The font colour and background have been chosen accordingly to ensure better readability.
- A rationale, highlighted in green, is provided after every answer is submitted to provide further information to the user.

![Answer Selection & Rationale]( https://github.com/JoelChan13/wound-care-trivia/blob/main/assets/images/wound-care-trivia-answer-mockup.png)

### Result & Return to Home Page

- The user is presented with the result once all questions have been answered and a prompt to retry the quiz or return to home is presented.
- By clicking the retry button, the user restarts the quiz and is prompted to provide a username.
- By clicking the return to home button, the user is taken to the home page.

![Result]( https://github.com/JoelChan13/wound-care-trivia/blob/main/assets/images/wound-care-trivia-result-mockup.jpg)

## Testing

- The page was tested on multiple browsers, including Firefox, Chrome, Brave, Edge.
- The project is responsive and fully functional in all standard screen sizes.
- Testing was conducted to ensure ease of readability on different devices.

### Validator Testing

#### HTML

- No errors were returned when testing all sections of the project through the W3C validation.

#### CSS  

- No errors were returned when testing styling section of the project through the W3C validation.

#### Accessibility

- Testing was done through Lighthouse DevTool and the result was satisfactory
![Lighthouse Validation](https://github.com/JoelChan13/wound-care-trivia/blob/main/assets/images/lighthouse-result-1.jpg)

![Lighthouse Validation](https://github.com/JoelChan13/wound-care-trivia/blob/main/assets/images/lighthouse-result-2.jpg)

![Lighthouse Validation](https://github.com/JoelChan13/wound-care-trivia/blob/main/assets/images/lighthouse-result-3.jpg)

#### Functional Testing

| Action  | Expected Outcome  | Pass/Fail |
| :------------ |:---------------:| -----:|
| Click on start button| Go to wound-care-trivia.html/start quiz & shuffles questions and answers        |    Pass |
| Click on high scores button | Go to highscores.html        |    Pass |
| Input Username | Stores username in local storage        |    Pass |
| Click on correct answer | Highlights answer button in green and displays rationale and next button        |    Pass |
| Click on incorrect answer | Highlights answer button in red and displays rationale and next button        |    Pass |
| Click on next button | Displays following question, and once all questions have been answered displays result page        |    Pass |
| Click on retry button | Restarts quiz        |    Pass |
| Click on return to home button | Redirects user to home page/index.html        |    Pass |
| Hover over answer buttons | highlights buttons in different colour and changes the cursor to a pointer        |    Pass |
| Hover over Recipes answer button once answer is submitted | Changes cursor to a no symbol         |    Pass |

#### Bugs

- When testing on Edge and Chrome, 3 errors were presented:
- ERROR 1 > "Unchecked runtime.lastError: The message port closed before a response was received."
- EEROR 2 > "Access to manifest at 'https://id.codeanywhere.com/realms/default/protocol/openid-connect/auth?client_id=proxy&scope=openid%20profile%20email&response_type=code&redirect_uri=https%3A%2F%2Fauth.us2.codeanyapp.com%2F_auth%2Fcallback&nonce=1lD2fgenRoYpMK48EI2E2WgZkGKCYnuHhdDky34p9gs&state=eyJyZXR1cm5UbyI6Imh0dHBzOi8vODAwMC1qb2VsY2hhbjEzLXdvdW5kLWNhcmUtdHItc2FuajhxeHVoOC51czIuY29kZWFueWFwcC5jb206NDQzL3NpdGUud2VibWFuaWZlc3QifQ&code_challenge_method=S256&code_challenge=jURrbTaRVF7AO0CXu8y0EWLUHA-osS-AaGsj_y3QK-c' (redirected from 'https://8000-joelchan13-wound-care-tr-sanj8qxuh8.us2.codeanyapp.com/site.webmanifest') from origin 'https://8000-joelchan13-wound-care-tr-sanj8qxuh8.us2.codeanyapp.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."
- ERROR 3 > "Failed to load resource: net::ERR_FAILED"
- The errors, as confirmed by the Code Institute tutor team, are linked to the browser extensions and IDE, and have no effect on the deployment and use of the app.
  
## Deployment

- The site was deployed to GitHub pages. From the GitHub repository, access wound-care-trivia. Click on the deployments section. Click on the active deployment link provided.
- [Wound Care Trivia Link](https://joelchan13.github.io/wound-care-trivia/)

### Local Deployment

- The repository was cloned to local machine using the following command in the terminal: git clone <https://github.com/JoelChan13/wound-care-trivia.git>
- The following command was submitted in the terminal: cd wound-care-trivia.
- index.html was opened in the browser to start website.
- Migrated to VS Code on 9th February 2025

## Credits

### Content

- Boilerplate HTML Structure Code was taken from the ci-full-template found in CI GitHub repo by lechien73
- The information related to wound care, found in the rationale of every answer was obtained from The British Journal of Nursing.

### Media

- The hero image used for this website were generated using Microsoft Bing Image Creator powered by DALL·E 3.
