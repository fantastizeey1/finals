import Notes from "./Notes";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  const existingCategories = ["General", "Work", "Personal", "Travel"];
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {notes.map((note) => (
        <Notes
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          category={note.category}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote
        handleAddNote={handleAddNote}
        existingCategories={existingCategories}
      />
    </div>
  );
};

export default NotesList;
