import React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";
import { Coupons } from "../../Screens/Coupons.jsx";
import Coupon from "../../Components/Coupon.jsx";

describe("<Coupons/>", () => {
	describe("without Coupons", () => {
		it("should have 0 child", () => {
			const couponsInstance = renderer.create(<Coupons />).root;
			const children = couponsInstance.findByType(View).children.child;
			expect(children).toBeFalsy();
		});
	});

	describe("With Coupons", () => {
		let couponsInstance;
		beforeAll(() => {
			const coupons = [
				{
					_id: "603f51e40f03e30fb0453f85",
					libelle: "Chaussures en promo",
					pourcentage: "20",
					dateValidite: "10/03/2021",
					__v: 0,
				},
				{
					_id: "603f51fa0f03e30fb0453f86",
					libelle: "Tshirts en promo",
					pourcentage: "35",
					dateValidite: "20/03/2021",
					__v: 0,
				},
				{
					_id: "603f521a0f03e30fb0453f87",
					libelle: "Pantalon en promo",
					pourcentage: "15",
					dateValidite: "18/03/2021",
					__v: 0,
				},
			];
			 couponsInstance = renderer.create(<Coupons coupons={coupons} />);
		});
		it("should have 3 child", () => {
			expect(couponsInstance.root.findAllByType(Coupon).length).toBe(3);
		});
		it("Should render properly", () => {
			expect(couponsInstance.toJSON()).toMatchSnapshot();
		});
	});
});
