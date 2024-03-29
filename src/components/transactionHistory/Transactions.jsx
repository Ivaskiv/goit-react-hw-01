import css from './transactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={css.history}>
      <thead className={css.thead}>
        <tr className={css.theadRow}>
          <th className={css.theadCell}>Type</th>
          <th className={css.theadCell}>Amount</th>
          <th className={css.theadCell}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {items.map(({ id, type, amount, currency }, index) => {
          const rowColor = index % 2 === 0 ? 'white' : 'lightgrey';
          return (
            <tr className={css.bodyRow} key={id} style={{ backgroundColor: rowColor }}>
              <td className={css.bodyCell}>{type}</td>
              <td className={css.bodyCell}>{amount}</td>
              <td className={css.bodyCell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
