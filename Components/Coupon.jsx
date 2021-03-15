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
				<Text style={styles.title}>{libelle}</Text>
				<Text style={styles.title}>{pourcentage}%</Text>
				<Text style={styles.title}>{dateValidite}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
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
	title: {
		fontSize: 17,
		fontWeight: "bold",
		marginVertical: 15,
	},
	addressContainer: {
		alignItems: "center",
		justifyContent: "space-between",
		fontSize: 13,
		marginBottom: 12,
	},
	address: {
		fontSize: 13,
	},
});

export default Coupon;
