# WELCOME TO SLAPCLOUD

[SlapCloud](https://slapcloud.herokuapp.com/#/) is a SoundCloud clone where you can:
1. make an account
2. upload audio files
3. play music
4. view song pages
5. like songs
6. view user profiles
7. search for songs and users


SlapCloud was built using:
1. React frontend (JS/HTML/CSS)
2. Redux state management
3. Rails backend (Ruby)
4. Postgres database
5. S3 for file storage


## Account Creation
Replicating the modal-based SoundCloud user creation process incorporated state management.
SoundCloud split up the signup and login process into a uesrname and a password input modal with a check in between to determine if the email was associated with an existing account. To do this, my solution was to create a custom endpoint in my Rails controller to check solely if the email exists and to pass that information back into local state. Upon changing that local state, I would render either the signup or login modal.

## Uploading Slaps
The upload process required multiple different components. I looked online for some helpful tips on drag and drop functionality and ended up building a wrapper component to give users the ability to drop files into the upload page. This wrapper component would take full advantage of HTML's built-in drag events.

The throughflow of the upload process would be to upload the file, creating an upload form -> filling out the upload form and saving would create a saved item component -> when all forms have been completed, all of those saved items would be converted to slaps. That process required both an upload form and a saved item component.

## Music Player
With the music player, I had two goals:
1. to have standard audio controls and to play through queues.
2. to persist from page to page and to be controlled via play buttons on different pages.

To accomplish the first goal, I created a custom music player that utilized a hidden html audio input for functionality. At first, it seemed like a large task, but I broke it down into small pieces.

![Screen Shot 2021-03-01 at 9 56 53 AM](https://user-images.githubusercontent.com/10728663/109538167-9d5f5e00-7a74-11eb-8977-558a2e95ac0f.png)

Another direction I could've taken would be to create individual components for larger pieces of the player, like the slider bar. I thought against this approach not only because I couldn't see another place where these components would be used but becaues I wanted the logic of the music player to be consolidated in one file. Each function renders a different bunch of elementse with its own event handlers.

For the persisting music player goal, I utilized a mix of redux and JavaScript. I would have break down the music player queue into three parts: prev for previous played, curr for currently playing, and next for queued up songs. The gave me flexibility to future features that would need to insert songs into the queue. Playing songs via any page would change the queue and thus cause the music player to rerender.


Features still in development:
1. interactable wave forms for song items and show page
2. follow user with a corresponding follower feed
3. playlists and album items to be displayed in discover/profile/search
4. refactor components from class based to exclusively functional (with hooks)
