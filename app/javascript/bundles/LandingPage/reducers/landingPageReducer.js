import { combineReducers } from 'redux';
import { LANDING_PAGE_NAME_UPDATE } from '../constants/landingPageConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case LANDING_PAGE_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const landingPageReducer = combineReducers({ name });

export default landingPageReducer;
