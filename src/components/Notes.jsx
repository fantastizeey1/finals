import { FaTrashAlt } from "react-icons/fa";

const Notes = ({ id, text, date, category, handleDeleteNote }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-md transition duration-300">
      <div className="flex justify-between items-center">
        <p className="text-gray-700 dark:text-gray-300">{text}</p>
        <button
          onClick={() => handleDeleteNote(id)}
          className="text-red-500 hover:text-red-600 transition"
        >
          <FaTrashAlt size={18} />
        </button>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Category: <span className="font-semibold">{category}</span>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        Date: {date}
      </p>
    </div>
  );
};

export default Notes;
