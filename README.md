#Playlist Me
Get music recommendations when you want them. Ask people for music recommendations, like "What are some great 90's dance songs?" Answer questions by choosing songs from the Rdio catalog, then play recommended songs within the app.

This project consists of a  [node.js](https://github.com/joyent/node) server that interfaces with the Rdio API on behalf of a Meteor app. [Rdio-Node](https://github.com/monsur/rdio-node) made working with the Rdio API using node.js easy.

On the client, I used the [Rdio Web Playback jQuery plugin](https://github.com/ColemanFoley/jquery.rdio.js) to simplify calls to the Rdio API. I also found [Rdio's Simple Web Playback example](https://github.com/rdio/hello-web-playback) helpful in getting going with the Rdio API.

Check it out at [http://playlist-me.meteor.com](http://playlist-me.meteor.com).

##Installation
Playlist Me does not yet work with Meteor 0.5.8. It includes a smart.json file which makes it run using Meteor 0.5.7. You have to install Meteorite for that file to be picked up.

1. Clone the repository.
2. Install [Meteorite](https://github.com/oortcloud/meteorite).
2. Start the app up with `mrt`.

Note: The client is set up to make requests to an instance of the node server running on nodejitsu, but if you want to take a look at the code, it's under public/playlist-me-helper.

##File Organization
I organized my files as recommended in the [Unofficial Meteor FAQ](https://github.com/oortcloud/unofficial-meteor-faq#where-should-i-put-my-files). Code that is specific to the client is in the client folder. Code for both the server and the client is in the root directory.

###Client-Specific Code
Directly under the client folder is initialSetup.js, which does some work that needs to be done on the client side every time the app is started. 'lib' contains libraries that only the client uses, in this case the Rdio Web Playback jQuery plugin. The sole CSS file is in 'stylesheets'.

Index.html is the top-level HTML file. It is made up of several sub-views, or templates, all of which are found in the views folder. 

For example, the index file refers to the 'hello' template in its very first line, which means that the contents of the hello template will be displayed in the place of that line. The hello template is in hello.html. Generally, each template is in its own html file, and the JavaScript  associated with each template is found in its own JavaScript file. For example, there is a hello.js file that contains the listeners and helper functions for the hello template.
