import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("One Punch");

  const handleOnInputChange = (event) => {
    setInputValue(event.target.value);
    // console.log(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onAddCategory(inputValue);
    // console.log(event.target.elements.inputData.value);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        name="inputData"
        type="text"
        placeholder="Ingress the category to search"
        value={inputValue}
        onChange={(event) => handleOnInputChange(event)}
      />
    </form>
  );
};
