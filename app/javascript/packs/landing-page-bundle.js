import ReactOnRails from 'react-on-rails';

import LandingPageApp from '../bundles/LandingPage/startup/LandingPageApp';

// This is how react_on_rails can see the LandingPage in the browser.
ReactOnRails.register({
  LandingPageApp,
});
