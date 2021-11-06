import React, { useState } from "react";
import ReactSecretInput from "../";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>react-secret-input 🌰</h1>
      <h3>value:{value}</h3>
      <ReactSecretInput value={value} onChange={setValue} />
    </div>
  );
}

export default App;
