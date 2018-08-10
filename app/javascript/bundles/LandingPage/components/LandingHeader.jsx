import PropTypes from 'prop-types';
import React from 'react';

export default class LandingHeader extends React.Component {
  render() {
    return (
      <header className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
          <nav>
            <div className="nav navbar-nav navbar-right">
              <a href="#">
                <p>Log in</p>
              </a>
              <a href="#">
                <div className="nav navbar-nav navbar-right">
                  <p>Sign up</p>
                </div>
              </a>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}
