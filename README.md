# react-secret-input
An input of type password implemented with React and TypeScript

## Install
```
yarn add react-secret-input
```

## Usage
```tsx
import React, { useState } from "react";
import ReactSecretInput from "react-secret-input";

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

```
## Demo
[react-secret-input](https://laoyutong.github.io/react-secret-input)