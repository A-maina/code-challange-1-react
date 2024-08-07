import React, { useState } from "react";

const Form = () => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  

  const handleOnChangeDate = (e) => setDate(e.target.value);
  const handleOnChangeAmount = (e) => setAmount(e.target.value);
  const handleOnChangeDescription = (e) => setDescription(e.target.value);
  const handleOnChangeCategory = (e) => setCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionData = {
      date: date,
      description: description,
      category: category,
      amount: amount,
    };
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(transactionData),
    })
      .then((res) => res.json())
      .then((data) => data("posted"));
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={handleOnChangeDescription}
          required
        />
        <input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={handleOnChangeCategory}
          required
        />
        <input
          type="number "
          placeholder="Enter amount"
          value={amount}
          onChange={handleOnChangeAmount}
          required
        />
        <input type="date" value={date} onChange={handleOnChangeDate} />
        <input type="submit" onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
