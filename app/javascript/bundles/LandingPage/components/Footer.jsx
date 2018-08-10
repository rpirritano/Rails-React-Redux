import PropTypes from 'prop-types';
import React from 'react';

export default class serverFooter extends React.Component {

  render() {
    return (
      <footer className="footer">
        <small>
          <p>COPYRIGHT @ 2018 PIRRITANO TECHNOLOGIES</p>
          <p>Made in San Francisco, California.</p>
        </small>
        <nav>
            <a href="#">
              <p>Log In</p>
            </a>
            <a href="#">
              <p>Create an Account</p>
            </a>
            <a href="#">
              <p>My Profile</p>
            </a>
            <a href="#">
              <p>Sign Out</p>
            </a>
          </nav>
          <div >
            <p>About</p>
            <p>Contact</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
      </footer>
    )
  }
}
