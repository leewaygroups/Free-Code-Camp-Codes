'use strict';
var React = require('react');

var btnType = {
  ops: 'OPERATION',
  val: 'VALUE'
};

var CalculatorButton = React.createClass({
  propTypes: {
    btnType: React.PropTypes.string.isRequired,
    caption: React.PropTypes.string.isRequired,
    btnClassName: React.PropTypes.string,
    value: React.PropTypes.number,
    ops: React.PropTypes.func.isRequired
  },

  render: function() {
    return (
       <button
       className={this.props.btnClassName}
       value={this.props.value}
       btnType={this.props.btnType}
       onClick={this.props.ops.bind(this, this.props.caption)} >{this.props.caption}</button>
    );
  }
});

module.exports = CalculatorButton;