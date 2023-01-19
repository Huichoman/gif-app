import { useState } from "react";
import * as component from "./components";

export const GifApp = () => {
  const [categories, setCategories] = useState([
    "Aimi",
    "Memo",
    "Moyi",
    "Normita",
  ]);

  const onAddCategory = (value) => {
    console.log("value > ", value);

    setCategories([value, ...categories]);
  };
  return (
    <>
      <component.AddCategory
        onAddCategory={(value) => onAddCategory(value)}
        // categories={categories}
      />
      <h1>GifApp</h1>

      <ol>
        {categories.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ol>
    </>
  );
};
