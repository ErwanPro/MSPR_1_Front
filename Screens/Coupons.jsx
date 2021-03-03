import React from "react";
import { FlatList, Text } from "react-native";

class Coupons extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			Coupons: [],
		};
	}

	render() {
		return (
			<FlatList
				style={{ backgroundColor: "white" }}
				data={this.state.projects}
				renderItem={({ item, index }) => <Text>ttoto</Text>}
				keyExtractor={item => item._id}
			/>
		);
	}
}

export default Coupons;
