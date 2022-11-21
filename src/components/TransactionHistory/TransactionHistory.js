import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'; 

export default function TransactionHistory({ items }) {
    return (
      <table className={css.table}>
  <thead className={css.head}>
    <tr className={css.head__row}>
      <th className={css.head__data}>Type</th>
      <th className={css.head__data}>Amount</th>
      <th className={css.head__data}>Currency</th>
    </tr>
  </thead>

        <tbody className={css.body}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.body__row}key={id}>
            <td className={css.body__data}>{type}</td>
            <td className={css.body__data}>{amount}</td>
            <td className={css.body__data}>{currency}</td>
          </tr>
        ))}
      </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    })
  ),
};