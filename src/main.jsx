import { createRoot } from "react-dom/client";
import { App } from "./components/app/App.jsx";

const rootEl = document.getElementById("root");

const reactRoot = createRoot(rootEl);

reactRoot.render(<App />);
