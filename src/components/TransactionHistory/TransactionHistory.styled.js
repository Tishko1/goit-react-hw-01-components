import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  margin: 20px auto;
  width: 350px;
  text-align: center;
  box-shadow: 2px 2px 14px 2px #919191;
  border-collapse: collapse;
  outline: 2px solid whitesmoke;
`;

export const TransactionHistoryHead = styled.thead`
  text-transform: uppercase;
  background-color: #7c73e6;
`;

export const TransactionHistoryBody = styled.tr`
  text-transform: capitalize;
  padding: 10px;
  height: 20px;
  outline: 1px solid whitesmoke;
  background-color: ${(props)=>{return props.theme.even(props.ind) ? "yellow" : "blue"}};
 
 
`;

  