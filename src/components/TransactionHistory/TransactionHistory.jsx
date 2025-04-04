import css from "./transactionHistory.module.css"


const TransactionHistory = ({items}) => {
    return (
        <table className={css.thead}>
  <thead>
    <tr className={css.row}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((it) => { 
      return ( 
    <tr key={it.id}>
      <td>{it.type}</td>
      <td>{it.amount}</td>
      <td>{it.currency}</td>
    </tr>
    )
  })
  }
  </tbody>
</table> 

    )
}

export default TransactionHistory;