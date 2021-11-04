import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <span className={styles.statistic_title}>Statistic</span>
    <ul className={styles.statistic_list}>
      <li className={styles.statistic_item}>
        Good: <span>{good}</span>
      </li>
      <li className={styles.statistic_item}>
        Neutral: <span>{neutral}</span>
      </li>
      <li className={styles.statistic_item}>
        Bad: <span>{bad}</span>
      </li>
      <li className={styles.statistic_item}>
        Total: <span>{total}</span>
      </li>
      <li className={styles.statistic_item}>
        Positive feedback: <span>{positivePercentage}%</span>
      </li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
