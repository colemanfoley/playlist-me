#Playlist Me
Get music recommendations when you want them. Ask people for music recommendations, like "What are some great 90's dance songs?" Answer questions by choosing songs from the Rdio catalog, then play recommended songs within the app.

This project consists of a  [Node.js](https://github.com/joyent/node) server that interfaces with the Rdio API on behalf of a Meteor app. [Rdio-Node](https://github.com/monsur/rdio-node) made working with the Rdio API using node.js easy.

On the client, I used the [Rdio Web Playback jQuery plugin](https://github.com/ColemanFoley/jquery.rdio.js) to simplify calls to the Rdio API. I also found [Rdio's Simple Web Playback example](https://github.com/rdio/hello-web-playback) helpful in getting going with the Rdio API.

Check it out at [http://playlist-me.meteor.com](http://playlist-me.meteor.com).

##Installation
Playlist Me does not yet work with Meteor 0.5.8. It includes a smart.json file which makes it run using Meteor 0.5.7. You have to install Meteorite for that file to be picked up.

1. Clone the repository.
2. Install [Meteorite](https://github.com/oortcloud/meteorite).
2. Start the app up with `mrt`.

Note: The client is set up to make requests to an instance of the node server running on nodejitsu, but if you want to take a look at the code, it's under public/playlist-me-helper.
