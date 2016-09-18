'use strict';

var React = require('react');
var NgIf = require('../common/reangular').NgIf;

var TwitchList = React.createClass({
  createTwitchList: function(twitch){
      return (
        <div className="twictch-item" key={twitch._id}>
           <div className="col-xs-2">
             <img src={twitch.image} className="img-responsive img-twitch-channel" alt="Responsive image" />
           </div>
           <div className="col-xs-8 text-center">
              <h3 className="twitch-channel-caption"><small>{twitch.name}</small></h3>
              <NgIf show={twitch.online}>
                <span className="badge twictch-badge badge-streaming">Live stream: {twitch.streaming}</span>
              </NgIf>
           </div>
           <div className="col-xs-2">
              <NgIf show={twitch.online}>
                  <h5 className="badge twictch-badge twictch-online"><a href={twitch.url} target="_blank">online</a></h5>
              </NgIf>
              <NgIf show={twitch.offline}>
                  <h5 className="badge twictch-badge twictch-offline">offline</h5>
              </NgIf>
               <NgIf show={twitch.status}>
                  <h5 className="badge twictch-badge twictch-blocked">closed</h5>
              </NgIf>
           </div>
        </div>
      );
  },

  propTypes: {
    twiches: React.PropTypes.array.isRequired
  },

  render: function () {
    return (
      <div>
        { this.props.twiches.map(this.createTwitchList, this) }
      </div>
    );
  }
});

module.exports = TwitchList;