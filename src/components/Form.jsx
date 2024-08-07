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
    fetch("https://react-backend-t7bo.vercel.app/", {
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter description"
          name="description"
          value={AddData.description}
          onChange={handleOnChange}
          required
        />
        <input
          type="text"
          placeholder="Enter category"
          name="category"
          value={AddData.category}
          onChange={handleOnChange}
          required
        />
        <input
          type="number "
          placeholder="Enter amount"
          name="amount"
          value={AddData.amount}
          onChange={handleOnChange}
          required
        />
          <input
            type="date"
            name="date"
            value={AddData.date}
            onChange={handleOnChange}
            required
          />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
