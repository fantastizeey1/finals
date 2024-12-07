import { useState } from "react";
import { FaSave } from "react-icons/fa";

const AddNote = ({ handleAddNote, existingCategories = [] }) => {
  const [noteText, setNoteText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (
      noteText.trim().length > 0 &&
      (selectedCategory || newCategory.trim())
    ) {
      const category = newCategory.trim() || selectedCategory;
      handleAddNote(noteText, category);
      setNoteText("");
      setSelectedCategory("");
      setNewCategory("");
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg shadow-lg transition duration-300 flex flex-col space-y-4">
      {/* Text Area */}
      <textarea
        rows="4"
        placeholder="Type your note here..."
        className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={noteText}
        onChange={handleChange}
      ></textarea>

      {/* Category Selection */}
      <div className="flex flex-col  gap-3">
        {/* Existing Categories Dropdown */}
        <select
          className="flex-1 p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setNewCategory(""); // Clear new category if an existing one is selected
          }}
        >
          <option value="">Select a Category</option>
          {existingCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Add New Category */}
        <input
          type="text"
          className="flex-1 p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Or add a new category"
          value={newCategory}
          onChange={(e) => {
            setNewCategory(e.target.value);
            setSelectedCategory(""); // Clear existing category if a new one is being typed
          }}
        />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <small className="text-gray-500 dark:text-gray-400">
          {characterLimit - noteText.length} Remaining
        </small>
        <button
          onClick={handleSaveClick}
          className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FaSave size={18} />
        </button>
      </div>
    </div>
  );
};

export default AddNote;
