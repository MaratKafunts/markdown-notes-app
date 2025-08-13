import NotesItem from "@/components/molecules/NotesItem/NotesItem";
import { useNotes } from "@/shared/context/noteContext";
import "./NotesList.module.scss";

const NotesList = () => {
	const { notes } = useNotes();

	return notes.map((note) => {
		return <NotesItem key={note.id} note={note} />;
	});
};

export default NotesList;
