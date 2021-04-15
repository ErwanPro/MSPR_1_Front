import React from "react";
import { StyleSheet, View } from "react-native";
import NavigationRouter from "./Router/NavigationRouter";
import { store } from "./Store/configureStore";
import { Provider } from "react-redux";

export default function App() {
	return (
		<Provider store={store}>
			<NavigationRouter />
		</Provider>
	);
}

// return (
//   <View style={styles.container}>
//     <StatusBar style="auto" />
//     <Scanner />
//   </View>
// );
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
