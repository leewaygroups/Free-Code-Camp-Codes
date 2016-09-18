'use strict';

var React = require('react');

var NgIf = React.createClass({
  propTypes: {
    show: React.PropTypes.any.isRequired
  },
  render: function () {
    if(this.props.show){
      return (this.props.children);
    }else{
      return null;
    }
  }
});

module.exports = {
  NgIf: NgIf
};