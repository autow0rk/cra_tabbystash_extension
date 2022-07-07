About This Project:
This is the browser extension meant to be paired with a web app in my repo, TabbyStash.

To use the custom browser extension, install it by doing:
1) Run 'npm run prodbuild' after cloning this repo to get the build of this project
1) Go to about:debugging#/runtime/this-firefox
2) Click on 'Load Temporary Add-on'
3) Choose the 'manifest.json' file in the 'build' folder that was produced when you ran 'npm run prodbuild'

With the extension installed, click the icon of the extension, and click 'Save tabs' in the dropdown to save all tabs in your current Firefox window. After giving a name to the group of tabs, you'll be prompted to sign-in to your account at TabbyStash (check the TabbyStash repo to see the process of making an account).
