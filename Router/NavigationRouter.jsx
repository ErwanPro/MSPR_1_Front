import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Scanner from "../Screens/Scanner";
import Coupons from "../Screens/Coupons";

class NavigationRouter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notting: true,
		};
	}

	TabNavigator = params => {
		const Tab = createBottomTabNavigator();
		return (
			<Tab.Navigator>
				<Tab.Screen
					name="Scan"
					component={Scanner}
					initialParams={params.route.params}
					options={{
						tabBarLabel: "Scan",
						tabBarIcon: ({ color, size }) => (
							<Image style={[styles.imageTab, { tintColor: color }]} source={require("../assets/scan.png")} />
						),
					}}
				/>
				<Tab.Screen
					name="List"
					component={Coupons}
					initialParams={params.route.params}
					options={{
						tabBarLabel: "Coupons",
						tabBarIcon: ({ color, size }) => (
							<Image style={[styles.imageTab, { tintColor: color }]} source={require("../assets/voucher.png")} />
						),
					}}
				/>
			</Tab.Navigator>
		);
	};

	render() {
		const Stack = createStackNavigator();
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="GoStyle" component={this.TabNavigator} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}

const styles = StyleSheet.create({
	imageTab: {
		height: 25,
		width: 25,
		// tintColor: "#007AFF"
	},
});

export default NavigationRouter;
