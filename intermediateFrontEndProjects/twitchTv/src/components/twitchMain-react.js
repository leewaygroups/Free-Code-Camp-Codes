 'use strict';

var React = require('react');
var TwitchHeader = require('./twitchHeader-react');
var TwitchList = require('./twitchList-react');
var TwitchGetterAPI = require('../api/getter');
var _ = require('lodash');

var Twitch = React.createClass({
  getAllTwitches: function(){
      TwitchGetterAPI.getAllStreams().then(function(data){
        this.setState({ twitches: data, twitchesCache: data});
    }.bind(this));
  },

  filterTwitch: function(filter){
  var filtered;
   switch (filter) {
     case "online":
        filtered = _.filter(this.state.twitchesCache, function(twitch){
          return twitch.online === true;
        });
        this.setState({twitches: filtered});
        break;

     case "offline":
      filtered = _.filter(this.state.twitchesCache, function(twitch){
        return twitch.offline === true;
      });
      this.setState({twitches: filtered});
      break;

    case "closed":
      filtered = _.filter(this.state.twitchesCache, function(twitch){
        return twitch.status === 404;
      });
      this.setState({twitches: filtered});
      break;

    default:
      this.getAllTwitches();
      break;
   }
},

  getInitialState: function(){
    return {
      twitches: []
    };
  },

  componentDidMount: function(){
    this.getAllTwitches();
  },

  render: function(){
    return (
      <div className=" container-fluid col-md-12">
          <div className="well col-md-8 col-md-offset-2">
            <div className="row row-header">
                <TwitchHeader filterTwitch={this.filterTwitch}/>
            </div>
            <div className="row row-body">
              <TwitchList twiches={this.state.twitches} />
            </div>
          </div>
      </div>
    );
  }
});

module.exports = Twitch;