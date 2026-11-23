import { useState } from "react";



function App(){
  const[transactions, setTransactions] = useState([]);
  const[title, setTitle] = useState("");
  const[amount, setAmount] = useState("");
  const[type, setType] = useState("")



  return(
    <div>
      <label>Transactions:</label>
      <input type="number"
      value={transactions}
      onChange={(e)=>{
        setTransactions(e.target.value)
      }}
      placeholder="Enter Transactions..."
      />

       <label>Title:</label>
      <input type="text"
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value)
      }}
      placeholder="Enter Title..."
      />

       <label>Amount:</label>
      <input type="number"
      value={amount}
      onChange={(e)=>{
        setAmount(e.target.value)
      }}
      placeholder="Enter Amount..."
      />

      <label>Type:</label>
      <select type="text"
      value={type}
      onChange={(e)=>{
        setType(e.target.value)
      }}
      placeholder="Enter Type..."
      />
    </div>
  )
}


