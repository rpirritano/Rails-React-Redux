/* eslint-disable import/prefer-default-export */

import { LANDING_PAGE_NAME_UPDATE } from '../constants/landingPageConstants';

export const updateName = (text) => ({
  type: LANDING_PAGE_NAME_UPDATE,
  text,
});
