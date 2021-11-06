# InputPassword
An input of type password implemented with React and TypeScript

## Install
```
yarn add react-secret-input
```

## Usage
```tsx
import { useState } from "react";
import ReactSecretInput from "react-secret-input";

function App() {
  const [value, setValue] = useState("");

  const onChange = (v: string) => {
    console.log("onChange:::", v);
  };

  return (
    <div className="App">
      <ReactSecretInput value={value} onChange={onChange} />
    </div>
  );
}

export default App;
```