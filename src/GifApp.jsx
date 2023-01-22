import { useState } from "react";
import * as component from "./components";

export const GifApp = () => {
  const [categories, setCategories] = useState(["Pokemon"]);

  const onAddCategory = (newCategory) => {
    console.log("value > ", newCategory);
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifApp</h1>

      <component.AddCategory onAddCategory={(value) => onAddCategory(value)} />

      {categories.map((category, index) => (
        <component.GifGrid category={category} key={`${category + index}`} />
      ))}
    </>
  );
};
