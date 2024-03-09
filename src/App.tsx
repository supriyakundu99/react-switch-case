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
