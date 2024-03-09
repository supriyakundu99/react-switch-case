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

In this example, depending on the value of `value`, one of the cases will be rendered. If `value` is `2`, it will render `Case 2`. If `value` is not matched with any cases, it will render the default case, which is `Default Case`.

### Example

You can find a more comprehensive example in the [`example`](./example) directory of this repository.

### License

This package is open-sourced software licensed under the [MIT license](./LICENSE).

---
