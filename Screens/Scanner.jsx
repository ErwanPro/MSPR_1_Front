import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

class Scanner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scanned: false,
			flash: false,
			cameraPermission: false,
		};
	}

	async componentDidMount() {
		const { status } = await BarCodeScanner.requestPermissionsAsync();
		this.setState({ cameraPermission: status === "granted" });
	}

	handleBarCodeScanned = event => {
		console.log(event.data);
		this.setState({ scanned: true });
	};

	render() {
		if (this.state.cameraPermission) {
			return (
				<View>
					<BarCodeScanner onBarCodeScanned={!this.state.scanned && this.handleBarCodeScanned} style={styles.barcode} />
				</View>
			);
		} else {
			return (
				<View>
					<Text>L'application n'a pas access a la camera</Text>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	barcode: {
		height: 800,
		width: 400,
	},
});

export default Scanner;
