import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/Noteslist";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState(() => {
    // Load notes from localStorage or use default notes
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    return (
      savedNotes || [
        {
          id: nanoid(),
          text: "Learn React",
          date: new Date().toLocaleDateString(),
          category: "Programming",
        },
        {
          id: nanoid(),
          text: "Buy groceries",
          date: new Date().toLocaleDateString(),
          category: "Personal",
        },
        {
          id: nanoid(),
          text: "Plan vacation",
          date: new Date().toLocaleDateString(),
          category: "Travel",
        },
        {
          id: nanoid(),
          text: "Read a new book",
          date: new Date().toLocaleDateString(),
          category: "Hobby",
        },
      ]
    );
  });

  const [darkMode, setDarkMode] = useState(() => {
    // Load dark mode preference from localStorage
    const savedDarkMode = localStorage.getItem("react-notes-app-dark-mode");
    return savedDarkMode === "true"; // Convert string to boolean
  });

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [existingCategories, setExistingCategories] = useState([
    "General",
    "Programming",
    "Personal",
    "Travel",
    "Hobby",
  ]);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  // Save dark mode preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("react-notes-app-dark-mode", darkMode.toString());
  }, [darkMode]);

  // Update the body class for dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const addNote = (text, category) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
      category,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);

    // Add new category dynamically if it doesn't exist
    if (!existingCategories.includes(category)) {
      setExistingCategories((prevCategories) => [...prevCategories, category]);
    }
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const filteredNotes = notes.filter((note) => {
    const matchesText = note.text
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || note.category === selectedCategory;
    return matchesText && matchesCategory;
  });

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-800"
      } min-h-screen`}
    >
      <div className="container mx-auto p-4">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 font-semibold">
            Filter by Category:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="All">All</option>
            {existingCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <NotesList
          notes={filteredNotes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
