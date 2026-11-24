import { useState } from "react";
import "./App.css"

function App() {

  // STATES: Store transactions and input values
  const [transactions, setTransactions] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

   // ADD TRANSACTION FUNCTION

  function addTracker() {
    // Check if all fields are filled

    if (!title || !amount || !type) {
      alert("Please fill in all fields!");
      return;
    }

     // Create a new transaction object
    const Newtracker = {
      title: title,
      amount: Number(amount),
      type: type,
    };

    // Add the new transaction to the array
    setTransactions([...transactions, Newtracker]);


      // Clear all input fields
    setTitle("");
    setAmount("");
    setType("");
  }

  return (
    <div>
      {/* HEADER */}
      <header>
        <h1>Smart Expense Tracker</h1>
        <p>Manage your money. Track your progress.</p>
      </header>

        {/* TRANSACTION FORM */}
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title..."
      />

      <label>Amount:</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount..."
      />

      <label>Type:</label>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Select Type</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      <button onClick={addTracker}>
        Add Transaction
      </button>


      {transactions.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>Amount: ${item.amount}</p>
          <p>Type: {item.type}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
