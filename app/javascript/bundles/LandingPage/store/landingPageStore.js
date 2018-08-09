import { createStore } from 'redux';
import landingPageReducer from '../reducers/landingPageReducer';

const configureStore = (railsProps) => (
  createStore(landingPageReducer, railsProps)
);

export default configureStore;
