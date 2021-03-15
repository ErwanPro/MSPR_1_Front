import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { getCouponById } from "../API/Coupon.js";

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

	handleBarCodeScanned = async event => {
		const idCoupon = event.data.replace("gs://", "");
		const coupon = await getCouponById(idCoupon);
		console.log(coupon);
		this.setState({ scanned: true }, () => {
			setTimeout(() => {
				this.setState({ scanned: false });
			}, 2000);
		});
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
