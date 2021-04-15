import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";


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

		const unsubscribeFocus = this.props.navigation.addListener('focus', () => {
			this.setState({scanned: false});
		});
		
		this.unsubscribeFocus = unsubscribeFocus;
		// const unsubscribeBlur = this.props.navigation.addListener('blur', () => {

		// });
	}

	componentWillUnmount() {
		this.unsubscribeFocus();
	}

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
			// this.ScanCallBack();
			this.setState({ scanned: true });
			this.props.navigation.jumpTo("List");
		} catch (e) {
			console.error(e);
		}
	};

	ScanCallBack = () => {
		this.setState({ scanned: true }, () => {
			setTimeout(() => {
				this.setState({ scanned: false });
			}, 2000);
		});
	}

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

export default connect()(Scanner);
