import React from "react";

const Singletransaction = ({ transaction }) => {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2    bg-black">Date</th>
            <th className="border px-4 py-2  bg-black">Description</th>
            <th className="border px-4 py-2  bg-black">Category</th>
            <th className="border px-4 py-2  bg-black">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 bg-purple-900">
              {transaction.date}
            </td>

            <td className="border px-4 py-2  bg-purple-900">
              {transaction.description}
            </td>
            <td className="border px-4 py-2  bg-purple-900">
              {transaction.category}
            </td>

            <td className="border px-4 py-2  bg-purple-900">
              {transaction.amount}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Singletransaction;
