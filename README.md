# WELCOME TO SLAPCLOUD

[SlapCloud](https://slapcloud.herokuapp.com/#/) is a SoundCloud clone where you can:
1. make an account
2. upload audio files


SlapCloud was built using:
1. React frontend (JS/HTML/CSS)
2. Redux state management
3. Rails backend (Ruby)
4. Postgres database
5. AWS S3 for file storage


## Account Creation
Replicating the modal-based SoundCloud user creation process incorporated state management.
SoundCloud split up the signup and login process into a uesrname and a password input modal with a check in between to determine if the email was associated with an existing account. To do this, my solution was to create a custom endpoint in my Rails controller to check solely if the email exists and to pass that information back into local state. Upon changing that local state, I would render either the signup or login modal.

## Uploading Slaps
The upload process required multiple different components. I looked online for some helpful tips on drag and drop functionality and ended up building a wrapper component to give users the ability to drop files into the upload page. This wrapper component would take full advantage of HTML's built-in drag events.

The throughflow of the upload process would be to upload the file, creating an upload form -> filling out the upload form and saving would create a saved item component -> when all forms have been completed, all of those saved items would be converted to slaps. That process required both an upload form and a saved item component.


Features still in development:
3. search for songs and artists
4. view users' posted songs and albums
5. play audio songs with a music player footer controller