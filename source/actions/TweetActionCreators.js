var AppDispatcher = require("../dispatcher/AppDispatcher");

function recieveTweet(tweet) {
    var action = {
        type: "receive_tweet", 
        tweet: tweet
    };
    
    AppDispatcher.dispatch(action);
}

module.exports = {
    receiveTweet: recieveTweet
}