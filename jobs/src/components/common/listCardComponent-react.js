'use strict';

var React = require('react');

var ListCard = React.createClass({

  propType: {
    item: React.PropTypes.object.isRequired
  },
  render: function(){
      return (
          <div className="list-card">
            <div className="list-card-content">
              <div list-card-image>
                <img src="../images/lis-card.jpg" alt="item image" />
              </div>
              <div list-item-info>
               <a href="#"><h4>{this.props.postTitle}</h4></a>
               <div className="list-card-summary">
                  <span className="secondary-text">Duty station:</span>
                  <span className="secondary-text">{this.props.dutyStation}</span>
                  <span className="separator secondary-text" aria-hidden="true">&nbsp;&nbsp;</span>
                  <span className="secondary-text">Closing-date:</span>
                  <span className="secondary-text">{this.props.closingDate}</span>
               </div>
                <div className="list-card-descr">
                  <span className="text" itemprop="description">{this.props.description}</span>
                </div>
              </div>
            </div>
          </div>
      );
  }
});

module.exports = ListCard;