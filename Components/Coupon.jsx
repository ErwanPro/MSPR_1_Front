import React from "react";
import { Text, StyleSheet, View } from "react-native";

class Coupon extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { libelle, pourcentage, dateValidite } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.percentageContainer}>
					<Text style={styles.percentage}>{pourcentage}%</Text>
				</View>
				<View style={styles.infomationContainer}>
					<Text style={styles.libelle}>{libelle}</Text>
					<Text style={styles.date}>expire le {dateValidite}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
		borderRadius: 20,
		margin: 15,
		padding: 10,
		paddingBottom: 15,
		elevation: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
	},
	infomationContainer: {
		flex: 2,
		height: "100%",
		marginTop: 7,
		alignItems: "center",
		justifyContent: "space-between",
	},
	libelle: {
		fontSize: 20,
		fontWeight: "bold",
	},
	date: {
		fontSize: 15
	},
	percentageContainer: {
		flex: 1,
		alignItems: "center",
		// backgroundColor: "blue",
	},
	percentage: {
		fontSize: 30,
		fontWeight: "bold",
		marginVertical: 15,
	},
});

export default Coupon;
