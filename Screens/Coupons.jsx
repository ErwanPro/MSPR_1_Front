import React from "react";
import { FlatList, RefreshControl } from "react-native";
import { connect } from "react-redux";
import Coupon from "../Components/Coupon";

export class Coupons extends React.Component {
	/**
	 * 
	 * @param {*} props 
	 */
	constructor(props) {
		super(props);

		this.state = {
			refreshing: false,
		};
	}

	/**
	 * 
	 * @returns Liste de l'ensemble des coupons scannés
	 */
	render() {
		return (
			<FlatList
				style={{ backgroundColor: "white" }}
				data={this.props.coupons}
				renderItem={({ item }) => <Coupon {...item} key={item._id} />}
				refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}
			/>
		);
	}
}

/**
 * 
 * @param {*} state 
 * @returns Coupons présents dans le store global
 */
const mapStateToProps = state => {
	return {
		coupons: state.coupons,
	};
};

export default connect(mapStateToProps)(Coupons);
