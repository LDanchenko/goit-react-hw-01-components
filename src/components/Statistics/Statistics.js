import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';
function randomColor() {
  return {
    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  };
}

const Statistic = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>Upload stats</h2>}

      <ul className={style.list}>
        {stats.map(item => (
          <li className={style.item} key={item.id} style={randomColor()}>
            <span className={style.label}>{item.label}</span>
            <span className={style.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistic;
Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
