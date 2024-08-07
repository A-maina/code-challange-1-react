import React, { useState, useEffect } from "react";
import Singletransaction from "./Singletransaction";
import Form from "./Form";
function Transactions() {
  const [transactions, setTransaction] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://react-backend-henna.vercel.app/transactions")
      .then((res) => res.json())
      .then((transactions) => setTransaction(transactions));
  }, []);
  const displaytransactions = transactions
    .filter((transaction) => {
      return search.toLowerCase() === ""
        ? transaction
        : transaction.description.toLowerCase().includes(search.toLowerCase());
    })
    .map((transaction) => (
      <Singletransaction transaction={transaction} key={transaction.id} />
    ));

  return (
    <div>
      <Form transactions={transactions} setTransaction={setTransaction} />
      <form onChange={(e) => setSearch(e.target.value)}>
        <input type="text" placeholder=" search" />
      </form>

      <div>{displaytransactions}</div>
    </div>
  );
}

export default Transactions;
