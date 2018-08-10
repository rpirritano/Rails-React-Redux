import PropTypes from 'prop-types';
import React from 'react';
import Footer from './Footer'
import LandingHeader from './LandingHeader'

export default class Landing extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <div className="landing-dashboard">
          <LandingHeader />
          <div className="dashboard-container">
            <div className="dashboard-title">
              <h1>Server-Side - React/Rails.</h1>
            </div>
            <div className="dashboard-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>In vulputate diam sed magna posuere, sit amet dapibus lacus sollicitudin. </p>
              <p>Nulla rhoncus diam at mauris.</p>
            </div>
            <h1>Log in</h1>
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div>
                  <label>Email</label>
                  <input type="text" className="form-control" placeholder="Enter your email"/>
                </div>
                <div>
                  <label>Password</label>
                  <input type="text" className="form-control" placeholder="Enter your password"/>
                </div>
                <div>
                  <button type="submit" className="btn btn-primary">Log in</button>
                </div>
                <p>New user</p>
                <a>Sign up Now!</a>
            </div>
          </div>
        </div>
      </div>
        <Footer logo={this.props.logo} />
      </div>




    )
  }
}
