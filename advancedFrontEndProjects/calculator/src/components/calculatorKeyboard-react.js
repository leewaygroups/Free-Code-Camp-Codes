'use strict';

var React = require('react');
var Button = require('./calculatorButton-react');


var CalculatorKeyboard = React.createClass({
  btnType: {
   ops: 'OPERATION',
   val: 'VALUE'
  },

  ops: {
    operationHandler: function(ops){
      console.log(ops);
    },
    valuehandler: function(value){
      console.log(value);
    }
  },

  render: function() {
    return (
      <div className="keyboard">
        <div className="buttons">
          <Button btnClassName={"red"} caption={"AC"} btnType={this.btnType.ops} ops={this.ops.operationHandler} />
          <Button btnClassName={"red"} caption={"C"} btnType={this.btnType.ops} ops={this.ops.operationHandler} />
          <Button caption={"/"} btnType={this.btnType.ops} ops={this.ops.operationHandler} />
          <Button caption={"X"} btnType={this.btnType.ops} ops={this.ops.operationHandler} />
          <Button caption={"7"} btnType={this.btnType.val} value={7} ops={this.ops.valuehandler}/>
          <Button caption={"8"} btnType={this.btnType.val} value={8} ops={this.ops.valuehandler}/>
          <Button caption={"9"} btnType={this.btnType.val} value={9} ops={this.ops.valuehandler}/>
          <Button caption={"-"} btnType={this.btnType.ops} ops={this.ops.operationHandler} />
          <Button caption={"4"} btnType={this.btnType.val} value={4} ops={this.ops.valuehandler}/>
          <Button caption={"5"} btnType={this.btnType.val} value={5} ops={this.ops.valuehandler}/>
          <Button caption={"6"} btnType={this.btnType.val} value={6} ops={this.ops.valuehandler}/>
          <Button caption={"+"} btnType={this.btnType.ops} ops={this.ops.operationHandler} />
          <Button caption={"1"} btnType={this.btnType.val} value={1} ops={this.ops.valuehandler}/>
          <Button caption={"2"} btnType={this.btnType.val} value={2} ops={this.ops.valuehandler}/>
          <Button caption={"3"} btnType={this.btnType.val} value={3} ops={this.ops.valuehandler}/>
          <Button btnClassName={"equalButton"} caption={"="} btnType={this.btnType.ops} ops={this.ops.operationHandler} />
          <Button btnClassName={"zeroButton"} caption={"0"} btnType={this.btnType.val} value={0} ops={this.ops.valuehandler}/>
          <Button caption={"."} btnType={this.btnType.val} value={"."} ops={this.ops.valuehandler} />
        </div>
      </div>
    );
  }
});

module.exports = CalculatorKeyboard;