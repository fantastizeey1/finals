import { FaTrashAlt } from "react-icons/fa";

const Notes = ({
  id,
  text,
  date,
  category,
  priority,
  handleDeleteNote,
  darkMode,
}) => {
  const getPriorityColor = (priority) => {
    if (darkMode) {
      switch (priority) {
        case "High":
          return "bg-red-700 text-white";
        case "Medium":
          return "bg-yellow-600 text-black";
        case "Low":
          return "bg-green-700 text-white";
        default:
          return "bg-gray-600 text-white";
      }
    } else {
      switch (priority) {
        case "High":
          return "bg-red-500 text-white";
        case "Medium":
          return "bg-yellow-500 text-black";
        case "Low":
          return "bg-green-500 text-white";
        default:
          return "bg-gray-300 text-black";
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-md transition duration-300">
      <div className="flex justify-between items-start">
        {/* Render formatted HTML content */}
        <div
          dangerouslySetInnerHTML={{ __html: text }}
          className="formatted-note-content prose dark:prose-invert w-[90%]"
        ></div>

        {/* Delete Button */}
        <button
          onClick={() => handleDeleteNote(id)}
          className="text-red-500 hover:text-red-600 transition"
        >
          <FaTrashAlt size={18} />
        </button>
      </div>

      {/* Category and Date */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Category: <span className="font-semibold">{category}</span>
      </p>
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">Date: {date}</p>
        <span className={`priority-badge ${getPriorityColor(priority)}`}>
          {priority}
        </span>
      </div>
    </div>
  );
};

export default Notes;
