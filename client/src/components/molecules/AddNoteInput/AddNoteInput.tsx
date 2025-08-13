import { useState } from "react";
import styles from "./AddNoteInput.module.scss";
import AddNoteButton from "@/components/atoms/AddNoteButton/AddNoteButton";
import { useNotes } from "@/shared/context/noteContext";

const AddNoteInput = () => {
	const [inputValue, setInputValue] = useState("");
	const { addNote, notes } = useNotes();

	const add = () => {
		const nextId = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;
		addNote({ id: nextId, title: inputValue, completed: false });
		setInputValue("");
	};

	return (
		<div className={styles.actions}>
			<div className={styles.inputGroup}>
				<input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" required />
				<label htmlFor="">CREATE NOTE</label>
			</div>
			<AddNoteButton add={add} />
		</div>
	);
};

export default AddNoteInput;

// src/
// ├── components/           ← атомы, молекулы и пр.
// │   ├── ui/               ← кнопки, input и т.д.
// │   └── layout/           ← навигация, header
// ├── context/              ← context-файлы
// ├── hooks/                ← кастомные хуки
// ├── pages/                ← страницы (если spa)
// ├── styles/
// ├── App.jsx
