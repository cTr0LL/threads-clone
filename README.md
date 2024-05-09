A threads clone made using Next.JS, MongoDB, Tailwind CSS, and Clerk.

List of features still being worked on:
1. Allow user to edit their profile after onboarding, currently not implemented. Simple fix, just needs to use the onboarding page shown to the user when signing up
2. Implement like feature. Currently, the only way to interact with a post (thread) is by commenting. Will add the option for users to like a post and to display the number of likes.
3. The search bar for the search tab, currently just displays all users.
4. Suggested users and communities, should be simple enough, just needs to pull some data from MongoDB and to display them. Haven't thought of how to determine which communities or users to suggest, maybe suggested can be based on which community the user is currently in.
5. Cleark profile image to sync with the user-uploaded image. Currently clerk image being displayed on the top right still uses the image from the user sign-up and not the uploaded image
6. Clerk community invitation email. There seems to be an issue with the redirect of automatic email sent by Clerk for invitations. Might be difficult to fix. The current idea for a workaround is simply not to use clerk for the invitation and simply do it through the app.
