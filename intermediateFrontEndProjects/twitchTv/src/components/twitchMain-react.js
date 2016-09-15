 'use strict';

var React = require('react');
var TwitchHeader = require('./twitchHeader-react');
var TwitchList = require('./twitchList-react');

var Twitch = React.createClass({
  render: function(){
    return (
      <div className="col-md-12">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-primary">
                <div className="panel-heading">
                     <TwitchHeader />
                </div>
                <div className="panel-body">
                    <p>Streams</p>
                </div>
                <div className="container-fluid">
                    <TwitchList />
                </div>
                <div className="panel-footer clearfix">
                   <div className="pull-right">
                      <a href="#" className="btn btn-default">Go Twitch</a>
                  </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = Twitch;