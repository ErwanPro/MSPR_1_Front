import Constants from "expo-constants";
if (process.env.NODE_ENV == "test") {
	SERVER_ADDR = process.env.SERVER_ADDR;
}else {
	SERVER_ADDR = Constants.manifest.extra.urlServer;
}
import axios from "react-native-axios";

/**
 * 
 * @param {*} id id du coupon dans la BDD
 * @returns L'ensemble des informations du coupon : id, libelle, pourcentage de réduction, date de validité
 */
export async function getCouponById(id) {
	console.log(`${SERVER_ADDR}/coupon/${id}`);
	return (await axios.get(`${SERVER_ADDR}/coupon/${id}`)).data;
}

/**
 * 
 * @returns L'ensemble des coupons présents dans la BDD de manière détaillée : id, libelle, pourcentage de réduction, date de validité
 */
export async function getCoupons() {
	try {
		return (await axios.get(`${SERVER_ADDR}/coupon`)).data;
	} catch (e) {
		console.error(e);
	}
}
