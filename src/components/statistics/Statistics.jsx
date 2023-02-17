import PropTypes from 'prop-types';
import { Statistic } from './Statistic';

export const Statistics = ({ title , stats}) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(stat => {
             return (
               <li key={stat.id}            className="item">
                     <Statistic label={stat.label}
                         percentage={stat.percentage} />
               </li>
             );
        })}

      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
};