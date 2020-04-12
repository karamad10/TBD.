import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import routes from '../constants/routes.json';

type Props = {
  increment: () => void;
  incrementIfOdd: () => void;
  incrementAsync: () => void;
  decrement: () => void;
  multiplay: () => void;
  reset: () => void;
  counter: number;
};

export default function Counter(props: Props) {
  const {
    increment,
    incrementIfOdd,
    incrementAsync,
    decrement,
    multiplay,
    counter,
    reset
  } = props;

  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div className={`counter ${styles.counter}`} data-tid="counter">
        {counter}
      </div>
      <div className={styles.btnGroup}>
        <button
          className={styles.btn}
          onClick={increment}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-plus" />
        </button>
        <button
          className={styles.btn}
          onClick={decrement}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-minus" />
        </button>
        <button
          className={styles.btn}
          onClick={multiplay}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-times" />
        </button>
        <button
          className={styles.btn}
          onClick={reset}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-refresh" />
        </button>
        <button
          className={styles.btn}
          onClick={incrementIfOdd}
          data-tclass="btn"
          type="button"
        >
          odd
        </button>
        <button
          className={styles.btn}
          onClick={() => incrementAsync()}
          data-tclass="btn"
          type="button"
        >
          async
        </button>
      </div>
    </div>
  );
}
