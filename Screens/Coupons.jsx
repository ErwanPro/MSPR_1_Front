import React from "react";
import { FlatList, RefreshControl } from "react-native";
import { getCoupons } from "../API/Coupon";
import Coupon from "../Components/Coupon";

class Coupons extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			refreshing: false,
			coupons: [],
		};
	}

	async componentDidMount() {
		const coupons = await getCoupons();
		this.setState({ coupons: coupons });
	}

	onRefresh = async () => {
		const coupons = await getCoupons();
		this.setState({ coupons: coupons, refreshing: false });
	};

	render() {
		getCoupons().then(coupon => console.log(coupon));
		return (
			<FlatList
				style={{ backgroundColor: "white" }}
				data={this.state.coupons}
				renderItem={({ item, index }) => <Coupon {...item} />}
				refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}
				keyExtractor={item => item._id}
			/>
		);
	}
}

export default Coupons;
