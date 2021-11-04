import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onIncrementBad }) => (
  <div className={styles.feedback_btn_container}>
    <button
      className={styles.feedback_btn}
      name="good"
      type="button"
      onClick={onIncrementBad}
    >
      Good
    </button>
    <button
      className={styles.feedback_btn}
      name="neutral"
      type="button"
      onClick={onIncrementBad}
    >
      Neutral
    </button>
    <button
      className={styles.feedback_btn}
      name="bad"
      type="button"
      onClick={onIncrementBad}
    >
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
