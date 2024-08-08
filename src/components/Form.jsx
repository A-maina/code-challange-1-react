import React, { useState } from "react";

const Form = ({ transactions, setTransaction }) => {
  const [AddData, setAddData] = useState({
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddData({
      ...AddData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://react-backend-henna.vercel.app/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(AddData),
    })
      .then((res) => res.json())
      .then((transaction) => setTransaction([transaction, ...transactions]));
    setAddData({
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-black shadow rounded">
      <h1 className="text-4xl font-bold text-purple-700 mt-4 mb-2">
        Bank of Flatiron
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-purple-500">Description</label>
          <input
            type="text"
            placeholder ="Enter description"
            name="description"
            value={AddData.description}
            onChange={handleOnChange}
            required
            className=" p-2"
          />
        </div>
        <div>
        <label className="block text-purple-500">Category</label>
          <input
            type="text"
            placeholder="Enter category"
            name="category"
            value={AddData.category}
            onChange={handleOnChange}
            required
            className=" p-2"
          />
        </div>
        <div>
          <label className="block text-purple-500">Amount</label>
          <input
            type="number "
            placeholder="Enter amount"
            name="amount"
            value={AddData.amount}
            onChange={handleOnChange}
            required
            className=" p-2"
          />
        </div>
        <div>
          <label className="block text-purple-500">Date</label>
          <input
            type="date"
            name="date"
            value={AddData.date}
            onChange={handleOnChange}
            required
            className=" p-2"
          />
        </div>
        <button
          className=" p-2 bg-purple-500  rounded hover:bg-purple-900"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
