 'use strict';

var React = require('react');
var TwitchHeader = require('./twitchHeader-react');
var TwitchList = require('./twitchList-react');
var TwitchGetterAPI = require('../api/getter');

var Twitch = React.createClass({
  getInitialState: function(){
    return {
      twitches: []
    };
  },

  componentDidMount: function(){
    TwitchGetterAPI.getAllStreams().then(function(data){
        this.setState({ twitches: data });
        console.info(this.state.twiches);
    }.bind(this));
  },

  render: function(){
    return (
      <div className=" container-fluid col-md-12">
          <div className="well col-md-8 col-md-offset-2">
          <div className="row row-header">
              <TwitchHeader />
          </div>
          <div className="row row-body">
             <TwitchList twiches={this.state.twitches} />
          </div>
          <div className="row row-footer">
              <p>Streams</p>
          </div>
          </div>
      </div>
    );
  }
});

module.exports = Twitch;

//https://api.twitch.tv/kraken/streams?stream_type=all

/*<div className="panel panel-primary">
    <div className="panel-heading">
          <TwitchHeader />
    </div>
    <div className="panel-body">
        <p>Streams</p>
    </div>
    <div className="container-fluid">
        <TwitchList twiches={this.state.twitches} />
    </div>
    <div className="panel-footer clearfix">
        <div className="pull-right">
          <a href="#" className="btn btn-default">Go Twitch</a>
      </div>
    </div>
</div>*/