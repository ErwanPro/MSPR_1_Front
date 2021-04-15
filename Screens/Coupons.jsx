import React from "react";
import { FlatList, RefreshControl } from "react-native";
import { connect } from "react-redux";
import { getCoupons } from "../API/Coupon";
import Coupon from "../Components/Coupon";

class Coupons extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			refreshing: false,
		};
	}

	onRefresh = async () => {
		// const coupons = await getCoupons();
		// this.setState({ coupons: coupons, refreshing: false });
	};

	render() {
		console.log(this.props.coupons);
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

const mapStateToProps = state => {
	return {
		coupons: state.coupons,
	};
};

export default connect(mapStateToProps)(Coupons);
