import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...CATEGORIES];

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect} />
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
