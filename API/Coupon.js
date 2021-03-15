import Constants from "expo-constants";
const SERVER_ADDR = Constants.manifest.extra.urlServer;
import axios from "react-native-axios";

export async function getCouponById(id) {
	console.log(`${SERVER_ADDR}/coupon/${id}`);
	return (await axios.get(`${SERVER_ADDR}/coupon/${id}`)).data;
}

export async function getCoupons() {
	try {
		return (await axios.get(`${SERVER_ADDR}/coupon`)).data;
	} catch (e) {
		console.log("bug");
		console.error(e);
	}
}
