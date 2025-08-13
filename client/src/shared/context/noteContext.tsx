import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Note } from "@/shared/types/Note";

export interface NoteContextType {
	notes: Note[];
	addNote: (note: Note) => void;
	deleteNote: (id: number) => void;
	updateNote: (id: number, updatedNote: Note) => void;
}

interface NotesProviderProps {
	children: ReactNode;
}

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export const NotesProvider = ({ children }: NotesProviderProps) => {
	const [notes, setNotes] = useState<Note[]>([]);

	console.log(notes);

	useEffect(() => {
		const savedNotes = localStorage.getItem("notes");
		if (savedNotes) {
			setNotes(JSON.parse(savedNotes));
		}
	}, []);

	useEffect(() => {
		if (notes.length > 0) {
			localStorage.setItem("notes", JSON.stringify(notes));
		} else {
			localStorage.setItem("notes", JSON.stringify([]));
		}
	}, [notes]);

	const addNote = (note: Note) => {
		setNotes((prevNotes) => [...prevNotes, note]);
	};

	const deleteNote = (id: number) => {
		setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
	};

	const updateNote = (id: number, updatedNote: Note) => {
		setNotes((prevNotes) => {
			return prevNotes.map((note) => (note.id === id ? updatedNote : note));
		});
	};

	return <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>{children}</NoteContext.Provider>;
};

export const useNotes = () => {
	const context = useContext(NoteContext);
	if (!context) {
		throw new Error("useNotes must be used within a NotesProvider");
	}
	return context;
};
