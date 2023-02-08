import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TransactionHistoryHead,
  TransactionHistoryBody,
  // TransactionHistoryBodySecond,
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable>
      <TransactionHistoryHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHistoryHead>

      <tbody>
        {items.map((item, ind) => (
          <TransactionHistoryBody key={item.id} ind={ind}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </TransactionHistoryBody>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      ind: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
