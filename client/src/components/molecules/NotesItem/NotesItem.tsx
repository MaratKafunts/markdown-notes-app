import React, { useEffect, useState } from "react";
import { Note } from "@/shared/types/Note";
import styles from "./NotesItem.module.scss";
import { useNotes } from "@/shared/context/noteContext";
import classNames from "classnames";
import ClearIcon from "@mui/icons-material/Clear";

interface NotesItemProps {
	note: Note;
}

const NotesItem: React.FC<NotesItemProps> = ({ note }) => {
	const { deleteNote, updateNote } = useNotes();
	const [visible, setVisible] = useState(false);
	const [isCheckBoxactive, setIsCheckBoxActive] = useState(false);
	const [isRemoving, setIsRemoving] = useState(false);

	const removeNote = () => {
		setIsRemoving(true);
		setTimeout(() => {
			deleteNote(note.id);
		}, 500);
	};

	useEffect(() => {
		const timer = setTimeout(() => setVisible(true), 10);
		return () => clearTimeout(timer);
	}, []);

	const handleClick = () => {
		setIsCheckBoxActive((prev) => !prev);
		updateNote(note.id, { ...note, completed: !isCheckBoxactive });
	};

	return (
		<div
			className={classNames(styles.note, {
				[styles["note--visible"]]: visible && !isRemoving,
				[styles["note--fadeout"]]: isRemoving,
			})}
		>
			<div
				className={`${styles.note__checkbox} ${isCheckBoxactive ? styles["note__checkbox-active"] : ""}`}
				onClick={handleClick}
			>
				<span></span>
			</div>
			<div className={styles.note__title}>{note.title}</div>
			<div onClick={removeNote} className={styles.note__cross}>
				<ClearIcon />
			</div>
		</div>
	);
};

export default NotesItem;
