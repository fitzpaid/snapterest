var React = require('react');
var ReactDom = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');
var CollectionActionCreators = require('../actions/CollectionActionCreators');
var AppDispatcher = require('../Dispatcher/AppDispatcher');

var StreamTweet = React.createClass({
    
    getInitialState: function () {
        return {
            numberOfCharactersIsIncreasing: null, 
            headerText: null
        };
    },
    
    componentWillMount: function () {
        this.setState({
            numberOfCharactersIsIncreasing: true,
            headerText: "Latest public photo from Twitter"
        });
    },
    
    shouldComponentUpdate: function (nextProps, nextState) {
        return (nextProps.tweet.text.length > 1);
    },
    
    addTweetToCollection: function (tweet) {
        CollectionActionCreators.addTweetToCollection(tweet);
    },
    
    render: function () {
        
        return(
            <section>
                <Header text={this.state.headerText} />
                <Tweet 
                    tweet={this.props.tweet}
                    onImageClick={this.addTweetToCollection} />
            </section>
        );
    }
});

module.exports = StreamTweet;