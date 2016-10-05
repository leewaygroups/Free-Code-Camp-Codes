 'use strict';

var React = require('react');
var CalculatorDisplay = require('./calculatorDisplay-react');
var CalculatorKeyboard = require('./calculatorKeyboard-react');
var _ = require('lodash');

var CalculatorPanel = React.createClass({
  render: function(){
    return (
      <div className=" container-fluid col-md-12">
            <div className="row col-md-4 col-md-offset-4">
              <div className="calc-panel">
                <CalculatorDisplay />
                <CalculatorKeyboard />
              </div>
            </div>
      </div>
    );
  }
});

module.exports = CalculatorPanel;