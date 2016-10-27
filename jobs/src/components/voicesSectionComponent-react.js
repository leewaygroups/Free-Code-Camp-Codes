'use strict';

var React = require('react');

var VoicesFromTheField = React.createClass({

    render: function(){
        return (
            <section className="section-voices-from-field">
                <div className="row">
                  <h2>Voices from the field</h2>
                </div>
                <div className="row">
                  <div className="col-md-3 box">
                    <div className="voice-from-field-photot">
                      <img src="../images/berlin.jpg" alt="Denmark" />
                       <h3>Berlin</h3>
                    </div>
                    <div>
                      <p className="voice-from-field-text">
                        Lorem Ipsum is simply dummy text of the printing <a href="#">hear more</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 box">
                    <div className="voice-from-field-photot">
                      <img src="../images/lisborn.jpg" alt="Denmark" />
                       <h3>Lisbon</h3>
                    </div>
                    <div>
                      <p className="voice-from-field-text">
                        Lorem Ipsum is simply dummy text of the printing <a href="#">hear more</a>
                       </p>
                    </div>
                  </div>
                  <div className="col-md-3 box">
                    <div className="voice-from-field-photot">
                      <img src="../images/london.jpg" alt="Denmark" />
                       <h3>London</h3>
                    </div>
                    <div>
                      <p className="voice-from-field-text">
                         Lorem Ipsum is simply dummy text of the printing <a href="#">hear more</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 box">
                    <div className="voice-from-field-photot">
                      <img src="../images/san-francisco.jpg" alt="Denmark" />
                      <h3>San-francisco</h3>
                    </div>
                    <div className="voice-from-field-photot">
                      <p className="voice-from-field-text">
                         Lorem Ipsum is simply dummy text of the printing <a href="#">hear more</a>
                      </p>
                    </div>
                  </div>
                </div>
            </section>
        );
    }
});

module.exports = VoicesFromTheField;