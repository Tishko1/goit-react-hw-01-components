import PropTypes from 'prop-types';
import {
  StatisticsBlock,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsLable,
  StatisticsPersentage,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatisticsBlock>
      {title ? <StatisticsTitle>{title}</StatisticsTitle> : null}
      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem key={stats.id}>
            <StatisticsLable>{stat.label}</StatisticsLable>
            <StatisticsPersentage>{stat.percentage}%</StatisticsPersentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsBlock>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
