'use strict';

var React = require('react');

var TwitchHeader = React.createClass({
  propTypes: {
    filterTwitch: React.PropTypes.func.isRequired
  },

  render: function () {
    return (
      <div className="row twitch-header-container">
          <div className="row twitch-header">
            <h3 className="twitch-header-text">Twitch TV Live</h3>
          </div>
          <div className="row twitch-filter">
              <ul className=" text-center list-inline twitch-filter-selector">
                    <li><a href="#" onClick={this.props.filterTwitch.bind(this, "all")}>All</a></li>
                    <li><a href="#" onClick={this.props.filterTwitch.bind(this, "online")}>On-line</a></li>
                    <li><a href="#" onClick={this.props.filterTwitch.bind(this, "offline")}>Off-line</a></li>
                    <li><a href="#" onClick={this.props.filterTwitch.bind(this, "closed")}>Closed</a></li>
              </ul>
          </div>
      </div>
    );
  }
});

module.exports = TwitchHeader;