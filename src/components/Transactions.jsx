import React, { useState, useEffect } from "react";
import Singltransaction from "./Singltransaction";
// import Singltransaction from "./Singltransaction";
function Transactions() {
const[transactions, setTransaction] = useState([])
useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((transactions) => setTransaction(transactions))
  }, []);
  const displaytransactions = transactions.map((transaction )=>(
    <Singltransaction  transaction={transaction} key={transaction.id}/>
  )

  )

  return (
    <div>{displaytransactions}</div>
  )
}

export default Transactions