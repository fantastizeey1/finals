# Notes App ✨

## Project Overview 🎯

The **Notes App** is a responsive React application designed for creating, organizing, and managing notes. Users can:

- Add, delete, and search notes.
- Categorize notes dynamically.
- Toggle between light and dark themes.
- Persist notes and theme settings using `localStorage`.

This app is built with modern web technologies including React, Tailwind CSS, and utilizes `localStorage` for data persistence.

---

## Features 🚀

1. **Add Notes:**

   - Create notes with a character limit of 200.
   - Assign a category to notes or create a new category dynamically.

2. **Search Notes:**

   - Search through notes by typing keywords.

3. **Filter by Category:**

   - Filter displayed notes based on their assigned category.

4. **Dark Mode:**

   - Toggle between light and dark themes.
   - The selected theme persists across sessions.

5. **Persistent Data:**
   - Notes and theme preferences are stored in `localStorage` to ensure they remain available after page reloads.

---

## Technologies Used 🛠️

- **Frontend:** React (with hooks for state management)
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **User ID:** nanoid
- **Data Storage:** `localStorage`

---

## Installation and Setup ⚙️

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x)
- npm (or yarn) (or pnpm)

### Steps to Run the Project

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/fantastizeey1/finals.git
   cd finals
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server:**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **View the App:**
   Open your browser and navigate to `http://localhost:3000`.

---

## Folder Structure 📂

```
notes-app/
├── public/
├── src/
│   ├── components/
│   │   ├── AddNote.js
│   │   ├── Header.js
│   │   ├── Notes.js
│   │   ├── NotesList.js
│   │   ├── Search.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
├── README.md
```

---

## Usage Instructions 📋

### Adding Notes 📝

1. Click the **Add Note** button.
2. Enter the note text and either:
   - Select an existing category.
   - Add a new category.
3. Save the note by clicking the save icon.

### Searching Notes 🔍

- Type keywords in the search bar to filter notes by text.

### Filtering Notes by Category 🗂️

- Use the category dropdown menu to display notes belonging to a specific category.

### Dark Mode Toggle 🌗

- Click the theme toggle icon in the header to switch between light and dark themes.

---

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your message here"
   ```

4. Push the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a Pull Request.

---

## License 📜

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements 🙌

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
