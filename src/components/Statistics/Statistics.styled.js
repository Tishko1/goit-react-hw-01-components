import styled from '@emotion/styled';

export const StatisticsBlock = styled.section`
  margin: 20px auto;
  width: 350px;
  text-align: center;
  box-shadow: 2px 2px 14px 2px #919191;
`;

export const StatisticsTitle = styled.h2`
  padding: 20px 0;
  font-size: 22px;
  font-weight: 700;
  color: #385170;
  text-transform: uppercase;
  margin: auto;
`;

export const StatisticsList = styled.ul`
  display: flex;
`;

export const StatisticsItem = styled.li`
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  background-color: ${({ theme }) => theme.renderingColor()};
`;

export const StatisticsLable = styled.span`
  width: 100%;
  margin-bottom: 5px;
  text-shadow: #fff 1px 1px 3px;
`;

export const StatisticsPersentage = styled.span`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  text-shadow: #fff 1px 1px 3px;
`;
