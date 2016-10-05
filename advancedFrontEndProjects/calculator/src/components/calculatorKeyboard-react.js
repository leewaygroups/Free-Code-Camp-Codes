'use strict';

var React = require('react');


var CalculatorKeyboard = React.createClass({

  render: function() {
    return (
      <div className="keyboard">
        <div className="buttons">
          <button class="red" value="ac">AC</button>
          <button class="red" value="ac">AC</button>
          <button class="red" value="ac">AC</button>
          <button class="red" value="ac">AC</button>
          <button class="red" value="ac">AC</button>
          <button class="red" value="ac">AC</button>
          <button class="red" value="ac">AC</button>
          <button class="red" value="ac">AC</button>
          <button class="red" value="ac">AC</button>
          <button class="red" value="ac">AC</button>
          <button class="red" value="ac">AC</button>
          <button class="red" value="ac">AC</button>
        </div>
      </div>
    );
  }
});

module.exports = CalculatorKeyboard;