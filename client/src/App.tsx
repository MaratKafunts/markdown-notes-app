import AddNoteInput from "@/components/molecules/AddNoteInput/AddNoteInput";
import Title from "@/components/atoms/TitlePage/Title";
import NotesList from "@/components/organisms/NotesList/NotesList";
import "./App.scss";

const App = () => {
	return (
		<div className="app">
			<Title />
			<AddNoteInput />
			<div className="notesList-wrapper">
				<NotesList />
			</div>
		</div>
	);
};

export default App;
