 'use strict';

var React = require('react');
var CalculatorDisplay = require('./calculatorDisplay-react');
var CalculatorKeyboard = require('./calculatorKeyboard-react');
var _ = require('lodash');
var math = require('mathjs');

var CalculatorPanel = React.createClass({
  urgumentExpression: function(ops){
    if(this.state.entryVal !== '0'){
      if(ops === 'X'){
        ops = '*';
      }else{
        ops = ops;
      }
      if(!this.state.tempHistoryVal){
         this.setState({historyVal: this.state.historyVal + ops, entryVal: '0'});
      }else{
         this.setState({historyVal: this.state.tempHistoryVal + ops, entryVal: '0', tempHistoryVal: null});
      }
    }
  },

  ops: {
    operationHandler: function(ops){
       var result;
      switch (ops) {
        case "AC":
            this.setState({entryVal: '0', historyVal: '0', tempHistoryVal: null});
          break;
        case "CE":
            this.setState({entryVal: '0'});
          break;
        case "=":
          try {
            result = math.eval(this.state.historyVal).toString();
            var resultHistory = this.state.historyVal + '=' + result.toString();

            if(result.length > 9){
              throw "myException";
            }else{
              this.setState({entryVal: result.toString()});
            }
            if(resultHistory.length < 25){
              this.setState({historyVal: resultHistory});
            }else{
              this.setState({historyVal: 'Ans =' + result.toString()});
            }
          } catch (err) {
            this.setState({entryVal: 'Error'});
          }
          if(result){
             this.setState({tempHistoryVal: result});
          }
          break;
        default:
          this.urgumentExpression(ops);
          break;
      }
    },
    valuehandler: function(value){
      if(this.state.entryVal === '0'){
        this.setState({entryVal: value});
      }else{
        if(this.state.entryVal.length < 9){
          this.setState({entryVal: this.state.entryVal + value});
        }
      }

      if(this.state.historyVal === '0'){
        this.setState({historyVal: value});
      }else{
        if(this.state.historyVal.length < 25){
          this.setState({historyVal: this.state.historyVal + value});
        }
      }
    }
  },
  getInitialState: function(){
    return {
      entryVal: '0',
      historyVal: '0',
      tempHistoryVal: '0'
    };
  },
  render: function(){
    return (
      <div className=" container-fluid col-md-12">
            <div className="row col-md-3 col-md-offset-4">
              <div className="calc-panel">
                <CalculatorDisplay entryVal={this.state.entryVal} historyVal={this.state.historyVal} />
                <CalculatorKeyboard operationHandler={this.ops.operationHandler.bind(this)} valuehandler={this.ops.valuehandler.bind(this)}/>
              </div>
            </div>
      </div>
    );
  }
});

module.exports = CalculatorPanel;