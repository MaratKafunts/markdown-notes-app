import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { NotesProvider } from "./shared/context/noteContext.tsx";

createRoot(document.getElementById("root")!).render(
	<NotesProvider>
		<App />
	</NotesProvider>
);
