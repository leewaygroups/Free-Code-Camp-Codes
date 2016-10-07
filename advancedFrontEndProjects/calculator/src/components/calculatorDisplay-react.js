'use strict';

var React = require('react');


var CalculatorDisplay = React.createClass({

 propTypes: {
    historyVal: React.PropTypes.string.isRequired,
    entryVal: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="calc-display-container">
        <div className="entry">
          <p>{this.props.entryVal}</p>
        </div>
        <div className="history">
          <p>{this.props.historyVal}</p>
        </div>
      </div>
    );
  }
});

module.exports = CalculatorDisplay;