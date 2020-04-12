import { Action } from 'redux';
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  MULTIPLAY_NUMBER,
  RESET_NUMBER
} from '../actions/counter';

export default function counter(state = 0, action: Action<string>) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    case MULTIPLAY_NUMBER:
      return state * state;
    case RESET_NUMBER:
      return state - state;
    default:
      return state;
  }
}
