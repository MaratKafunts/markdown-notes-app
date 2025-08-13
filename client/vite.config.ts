import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // 👈 добавь

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"), // 👈 добавь
		},
	},
	base: "/markdown-notes-app/",
});
