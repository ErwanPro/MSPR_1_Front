import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";


import { BarCodeScanner } from "expo-barcode-scanner";

import { getCouponById } from "../API/Coupon.js";

export class Scanner extends React.Component {
	/**
	 * 
	 * @param {*} props 
	 */
	constructor(props) {
		super(props);
		this.state = {
			scanned: false,
			flash: false,
			cameraPermission: false,
		};
	}

	/**
	 * Demande de permission de la caméra et gestion de l'activation du scanner
	 */
	async componentDidMount() {
		const { status } = await BarCodeScanner.requestPermissionsAsync();
		this.setState({ cameraPermission: status === "granted" });

		const unsubscribeFocus = this.props.navigation.addListener('focus', () => {
			this.setState({scanned: false});
		});
		
		this.unsubscribeFocus = unsubscribeFocus;
	}

	/**
	 * Gestion de la désactivation du scanner
	 */
	componentWillUnmount() {
		this.unsubscribeFocus();
	}

	/**
	 * Traitement de la donnée suite au scan d'un qrCode
	 * @param {*} event 
	 */
	handleBarCodeScanned = async event => {
		const idCoupon = event.data.replace("gs://", "");
		try {
			const coupon = await getCouponById(idCoupon);
			coupon.id = coupon._id;
			delete coupon._id;
			delete coupon.__v;
			const action = { type: "ADD_COUPON", ...coupon };
			console.log(action);
			this.props.dispatch(action);
			this.setState({ scanned: true });
			this.props.navigation.jumpTo("List");
		} catch (e) {
			console.error(e);
		}
	};


	/**
	 * 
	 * @returns Vue du scanner de qrCode si les permissions sont accordées à l'application
	 */
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

/**
 * Style CSS de la Vue
 */
const styles = StyleSheet.create({
	barcode: {
		height: 800,
		width: 400,
	},
});

export default connect()(Scanner);
