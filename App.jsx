import React from "react";
import NavigationRouter from "./Router/NavigationRouter";
import { store } from "./Store/configureStore";
import { Provider } from "react-redux";

/**
 * Point d'entrée de l'App
 * @returns Application
 */
export default function App() {
	return (
		<Provider store={store}>
			<NavigationRouter />
		</Provider>
	);
}
