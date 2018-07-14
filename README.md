2025.
The number of websites breached and personal data leaked have increased
exponentially since the most used encryption standards have been compromised.

A friend of yours created a webservice to track these leaks and asked you to
create a website to visualize them.

He created two different webservices:

1. GET /ws/breaches?index=[a positive integer]
    - This webservice returns an object with a "result" property containing
        an array of at most 20 breached sites, starting at the
        provided index (e.g calling /ws/breaches?index=0 will return the 20
        last breached sites, /ws/breaches?index=20 the 20 next, etc.)
    - A breached site object contains the following information:
        - site: The domain of the breached site
        - date: The time of the breach, in milliseconds
        - number: The number of accounts leaked

2. GET /ws/icon?site=[domain of a site]
    - This webservice returns the url of an icon for the provided site
    - The icons size is 58x36 pixels

So here we are... Create a simple interface to display the last breaches!
1. Make index.html in the ./public folder look like js_mockup.psd in the ./_mockups folder, and add any additional files you'd need there as well
2. To start the server, open a terminal, cd to this folder and run
    node app_simple.js
    (See http://nodejs.org/ for instructions on how to install node)
3. Access the website through the port 3000 of your local machine

Remarks:
- Important: You should only retrieve data through the provided webservices, and not modify these nor get the data from another source.
- Please use vanilla JS as much as possbile. (No jQuery, Zepto, or similar DOM manipulation libraries.) ES6 is welcome as well as utitlity libraries. We recommend using Axios for AJAX requests and encourage the use of promises over the callback pattern. We generally like to see and learn about the latest frameworks, as long as they are open source and freely available!
- All work required should be done on the client-side.

Design notes:
- Min-width should be set to 1280px
- Fonts will be either "Source Sans Pro" (https://fonts.google.com/specimen/Source+Sans+Pro?selection.family=Source+Sans+Pro) or
Roboto Mono (https://fonts.google.com/specimen/Roboto+Mono)
- All image assets you may need are in /mockup-assets.

Bonus points:
- Do not hesitate to make use of the latest technologies
- Animate your interface if it can enhance the user experience

If you have any questions:
bradley.cushing@dashlane.com

Have fun!