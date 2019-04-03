"use strict";

function showMeLyrics () { // ES6 style export
    console.log("Yo Yo Yo");
    console.log("Yo Yo Yo");
}

function showMeNames () {
    console.log("Aiden, Sofia and Ajay");
}

/**
 *   Old style exports. Node does not support it yet.
 *
 *   @type {{showMeLyrics: showMeLyrics, showMeNames: showMeNames}}
 *   module.exports =  {showMeLyrics: showMeLyrics, showMeNames: showMeNames}; Old style export
 */
module.exports = {
    showMeLyrics: showMeLyrics,
    showMeNames: showMeNames
};