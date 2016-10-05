'use strict';

var React = require('react');


var CalculatorDisplay = React.createClass({

  render: function() {
    return (
      <div className="calc-display-container">
        <div className="entry">
          <p>0</p>
        </div>
        <div className="history">
          <p>0</p>
        </div>
      </div>
    );
  }
});

module.exports = CalculatorDisplay;