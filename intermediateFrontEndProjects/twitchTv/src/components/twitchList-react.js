'use strict';

var React = require('react');

var TwitchList = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="list-group">
            <div className="list-group-item">Mobile Phones <span className="badge">50</span>
            </div>
            <div className="list-group-item">Laptops & Desktops <span className="badge">145</span>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = TwitchList;