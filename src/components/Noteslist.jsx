import Notes from "./Notes";
import AddNote from "./AddNote";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  const existingCategories = ["General", "Work", "Personal", "Travel"];
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="relative p-4">
      {/* Add Note Button */}
      <button
        className="fixed top-[50%] md:top-[32%] md:right-5 left-0 bg-blue-500 text-white dark:bg-blue-400 dark:text-gray-800 rounded-full shadow-md hover:bg-blue-600 dark:hover:bg-blue-500 transition h-12 w-12 md:h-16 md:w-16 flex items-center justify-center md:text-[40px] p-6"
        onClick={togglePopup}
      >
        +
      </button>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {notes
          .slice() // Creates a shallow copy to avoid mutating the original `notes` array
          .reverse() // Reverses the array to show the newest note first
          .map((note) => (
            <Notes
              key={note.id}
              id={note.id}
              text={note.text}
              date={note.date}
              category={note.category}
              priority={note.priority}
              handleDeleteNote={handleDeleteNote}
            />
          ))}
      </div>

      {/* Popup Overlay */}
      {isPopupVisible && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={togglePopup}
          ></div>
          <div className="fixed inset-0 md:inset-x-[25%] inset-y-[10%] flex items-center justify-center z-20 md:bg-none">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[95%] h-[100%] max-w-md relative -z-10">
              <button
                className="absolute top-5 right-3 lg:-right-[80px] text-red-500 hover:text-gray-700 dark:text-red-300 dark:hover:text-gray-500 z-50"
                onClick={togglePopup}
              >
                <MdClose size={28} />
              </button>
              <AddNote
                handleAddNote={handleAddNote}
                existingCategories={existingCategories}
                onClose={togglePopup}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NotesList;
