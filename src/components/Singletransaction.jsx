import React from "react";

const Singletransaction = ({ transaction }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {transaction.date} </td>

            <td>{transaction.description}</td>
            <td>{transaction.category}</td>

            <td>{transaction.amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Singletransaction;
