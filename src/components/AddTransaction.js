import React from "react";

export default function AddTransaction() {
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..."></input>
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="number" placeholder="Enter amount..."></input>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
