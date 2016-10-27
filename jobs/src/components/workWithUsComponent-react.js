'use strict';

var React = require('react');

var WorkWithUs = React.createClass({

    render: function(){
        return (
            <section className="section-work-with-us">
              <div className="row">
                <div className="col-md-6">
                  <h2>WORK WITH US</h2>
                  <div className="info-box">
                    <div className="work-with-us-img">
                      <img src="../images/workWithUs.jpg" alt="work with us" />
                    </div>
                    <div>
                      <div className="col-xs-6">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a
                          type specimen book
                        </p>
                      </div>
                      <div className="col-xs-6">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book
                          </p>
                      </div>
                    </div>
                  </div>
                  </div>
                <div className="col-md-6">
                  <h2>WORK AT UNOPS</h2>
                  <div className="col-md-10 video-place-holder">
                    <div>
                      <img src="../images/videoPlaceholder.jpg" alt="Work at UNOPS" />
                    </div>
                    <div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        );
    }
});

module.exports = WorkWithUs;