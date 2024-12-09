import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaSave } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNote = ({ handleAddNote, existingCategories = [], onClose }) => {
  const [noteContent, setNoteContent] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [priority, setPriority] = useState("Medium");
  const characterLimit = 200;

  // Handle Speech-to-Text
  const handleSpeechInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onstart = () => setIsRecording(true);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setNoteContent((prevContent) => prevContent + " " + transcript);
    };
    recognition.onend = () => setIsRecording(false);

    recognition.start();
  };

  // Save Note
  const handleSaveClick = () => {
    if (!noteContent.trim()) {
      toast.error("Note content is required!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (!selectedCategory && !newCategory.trim()) {
      toast.error("Category is required!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    const category = newCategory.trim() || selectedCategory;

    handleAddNote(noteContent, category, priority);

    // Clear form
    setNoteContent("");
    setSelectedCategory("");
    setNewCategory("");
    setPriority("Medium");

    toast.success("Note added successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    // Close the popup
    onClose();
  };

  return (
    <div className="bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg shadow-lg transition duration-300 flex flex-col space-y-6 fixed inset-2 md:inset-x-[25%] inset-y-[6%] bg-opacity-80 z-10 md:w-[50%] h-[90%] md:h-[80%]">
      {/* Toast Container */}
      <ToastContainer />

      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-lg">Add Note</h2>
      </div>

      {/* Form Section */}
      <div className="flex flex-col h-[70%] md:flex-row gap-6">
        {/* Note Input */}
        <div className="flex-1 h-[70%] mb-8 lg:mb-10">
          <ReactQuill
            theme="snow"
            value={noteContent}
            onChange={setNoteContent}
            placeholder="Write your note here..."
            className="h-full md:h-64"
          />
        </div>

        {/* Category and Priority */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Existing Categories Dropdown */}
          <select
            className="w-full p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Or add a new category"
            value={newCategory}
            onChange={(e) => {
              setNewCategory(e.target.value);
              setSelectedCategory(""); // Clear existing category if a new one is being typed
            }}
          />

          {/* Priority Selector */}
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <button
          className={`px-4 py-2 ${
            isRecording
              ? "bg-red-500 hover:bg-red-600"
              : "bg-gray-500 hover:bg-gray-800"
          } text-white rounded`}
          onClick={handleSpeechInput}
        >
          {isRecording ? "Listening..." : "Voice Input"}
        </button>
        <small className="text-gray-500 dark:text-gray-400">
          {characterLimit - noteContent.length} Remaining
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
