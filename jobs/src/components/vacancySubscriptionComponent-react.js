'use strict';

var React = require('react');

var VacancySubcription = React.createClass({

    render: function(){
        return (
            <section className="section-vacancy-subscription">
                <div className="row">
                  <h2>Get notified about relevant open positions</h2>
                </div>
                <div className="row">
                      <form className="vacancy-subscription-form">
                        <div className="row">
                            <div className="col-md-3">
                                <label for="name">Job category</label>
                            </div>
                            <div className="col-md-8">
                                 <select name="find-us" id="find-us">
                                    <option value="friends" selected>Information Technology</option>
                                    <option value="search">Human Resources</option>
                                    <option value="ad">Engineering</option>
                                    <option value="other">Project Managment</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label for="name">Contract type</label>
                            </div>
                            <div className="col-md-8">
                                 <select name="find-us" id="find-us">
                                    <option value="friends" selected>Staff</option>
                                    <option value="search">Non-Staff</option>
                                    <option value="ad">Consultancy</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label for="name">ICS level</label>
                            </div>
                            <div className="col-md-8">
                                 <select name="find-us" id="find-us">
                                    <option value="friends" selected>ICS-1</option>
                                    <option value="search">ICS-1</option>
                                    <option value="ad">ICS-1</option>
                                    <option value="other">ICS-1</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label for="name">Duty station</label>
                            </div>
                            <div className="col-md-8">
                                 <select name="find-us" id="find-us">
                                    <option value="friends" selected>Bangkok</option>
                                    <option value="search">Gaza</option>
                                    <option value="ad">Maynmar</option>
                                    <option value="other">Denmark</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label>Job title keywards</label>
                            </div>
                            <div className="col-md-8">
                                <textarea name="message" placeholder="keywords"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label>&nbsp;</label>
                            </div>
                            <div className="col-md-8">
                                 <a href="#" className="cbtn cbtn-full">Subscribe!</a>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
        );
    }
});

module.exports = VacancySubcription;