import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import NavigationRouter from "./Router/NavigationRouter";
import Scanner from "./Screens/Scanner";

export default function App() {
	return <NavigationRouter />;
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
