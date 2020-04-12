import { GetState, Dispatch } from '../reducers/types';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const MULTIPLAY_NUMBER = 'MULTIPLAY_NUMBER';
export const RESET_NUMBER = 'RESET_NUMBER';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function multiplay() {
  return {
    type: MULTIPLAY_NUMBER
  };
}

export function reset() {
  return {
    type: RESET_NUMBER
  };
}

export function incrementIfOdd() {
  return (dispatch: Dispatch, getState: GetState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

export function multiplayNum(delay = 100) {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(multiplay());
    }, delay);
  };
}

export function resetNum(delay = 100) {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(reset());
    }, delay);
  };
}
