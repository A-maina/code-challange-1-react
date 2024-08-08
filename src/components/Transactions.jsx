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
        <div>
        <label className="block text-purple-500 text-2xl font-bold text-purple-700 mt-4 mb-2">Search</label>

          <input className=" p-2 bg-black " type="text" placeholder=" search" />
        </div>
      </form>

      <div>{displaytransactions}</div>
    </div>
  );
}

export default Transactions;
