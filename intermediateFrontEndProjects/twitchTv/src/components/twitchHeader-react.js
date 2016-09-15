'use strict';

var React = require('react');

var TwitchHeader = React.createClass({
  render: function () {
    return (
      <div className="row">
          <div className="col-md-6">
            <h3>Twitch TV Live</h3>
          </div>
          <div className="col-md-2 pull-right">
              <ul className="pull-right">
                    <li>All</li>
                    <li>On-line</li>
                    <li>Off-line</li>
              </ul>
          </div>
      </div>
    );
  }
});

module.exports = TwitchHeader;