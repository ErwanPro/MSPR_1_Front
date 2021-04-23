import React from "react";
import { Text, View } from "react-native";
import renderer from "react-test-renderer";
import Coupon from "../../Components/Coupon.jsx";

describe("<Coupon/>", () => {
	it("Should render properly", () => {
		const couponData = {
			_id: "603f51e40f03e30fb0453f85",
			libelle: "Chaussures en promo",
			pourcentage: "20",
			dateValidite: "10/03/2021",
			__v: 0,
		};
		const couponInstance = renderer.create(<Coupon {...couponData} />).toJSON();
		expect(couponInstance).toMatchSnapshot();
	});
});
