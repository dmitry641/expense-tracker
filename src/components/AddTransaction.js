import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useGlobalContext();

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({ id: Date.now(), text: text, amount: +amount });
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter text..."
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Enter amount..."
          ></input>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
