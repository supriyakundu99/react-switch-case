## React Switch Case Statement

This package provides React components that emulate switch-case behavior for conditional rendering in React applications.

### Installation

You can install the package via npm or yarn:

- **npm**:

  ```
  npm install react-switch-case-statement
  ```

- **Yarn**:
  ```
  yarn add react-switch-case-statement
  ```

### Components

#### `Switch`

The `Switch` component represents the switch statement itself. It evaluates the given expression and renders the corresponding `Case` component or default case.

##### Props

- `expression`: (required) The value to switch on.
- `children`: (required) The `Case` components defining different cases.

#### `Case`

The `Case` component represents a single case within the switch statement. It renders its children if the provided `value` matches the `expression` of the parent `Switch` component.

##### Props

- `value`: (optional) The value to match against the switch expression. If not provided, it behaves as the default case.
- `children`: (required) The React elements to render if the case matches.

### Usage

In your React component file:

```jsx
import React from "react";
import { Switch, Case } from "react-switch-case-statement";

function App() {
  const value = 2; // Example expression value

  return (
    <Switch expression={value}>
      <Case value={1}>Case 1</Case>
      <Case value={2}>Case 2</Case>
      <Case value={3}>Case 3</Case>
      <Case>Default Case</Case>
    </Switch>
  );
}

export default App;
```

```tsx
import React from "react";
import { SetStateAction, useState } from "react";
import { Case, Switch } from "./components";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="selectOption">Select an option:</label>
      <select
        id="selectOption"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
      <p>Selected option: {selectedOption}</p>
      <p>
        <span>Using Switch-Case: </span>
        <span>
          <Switch expression={selectedOption}>
            <Case value={"option1"}>Option Label 1</Case>
            <Case value={"option2"}>Option Label 2</Case>
            <Case value={"option3"}>Option Label 3</Case>
            <Case value={"option4"}>Option Label 4</Case>
          </Switch>
        </span>
      </p>
    </div>
  );
}

export default App;
```

In this example, depending on the value of `value`, one of the cases will be rendered. If `value` is `2`, it will render `Case 2`. If `value` is not matched with any cases, it will render the default case, which is `Default Case`.

### Example

You can find a more comprehensive example in the [`example`](./example) directory of this repository.

### License

This package is open-sourced software licensed under the [MIT license](./LICENSE).

---
