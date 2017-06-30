import {
  FETCH_MY_MEETUPS
} from './actions';

const INITIAL_STATE = {
  myMeetups: {
    data: [],
    isFetched: false,
    error: {
      on: false,
      message: null
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_MY_MEETUPS}_PENDING`:
    case `${FETCH_MY_MEETUPS}_FULFILLED`:
    case `${FETCH_MY_MEETUPS}_REJECTED`:
    default:
      return state;
  }
};
