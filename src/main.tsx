import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./index.css";
import Loader from "./components/Loader.tsx";
import { routeTree } from "./routeTree.gen.ts";
import { AnimatePresence } from "motion/react";

const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	scrollRestoration: true,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2250);
		return () => clearTimeout(timer);
	}, []);

	
	return (
		<>
		<AnimatePresence>
			{loading ? <Loader/> : null}
		</AnimatePresence>
		<RouterProvider router={router}/>
	</>
)
}

const rootElement = document.getElementById("root")!;

if(!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App/>
    </StrictMode>
  )
}