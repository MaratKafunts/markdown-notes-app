import styles from "./AddNoteButton.module.scss";

interface AddNoteButtonProps {
	add: React.MouseEventHandler<HTMLButtonElement>;
}

const AddNoteButton: React.FC<AddNoteButtonProps> = ({ add }) => {
	return (
		<button onClick={add} type="button" className={styles.button}>
			<div className={styles.button__text}>ADD NOTE</div>
		</button>
	);
};

export default AddNoteButton;
