import PropTypes from 'prop-types';
import React from 'react';

const LandingPage = ({ name, updateName }) => (
  <div>
    <h3>
      Hello, {name}, this is my Landing Page!
    </h3>
    <hr />
    <form >
      <label htmlFor="name">
        Say hello to:
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
  </div>
);

LandingPage.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default LandingPage;
