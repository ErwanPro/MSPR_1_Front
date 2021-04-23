import { getCouponById, getCoupons } from "../API/Coupon";

test("appel get coupons", async () => {
	const data = await getCouponById("603f51e40f03e30fb0453f85");
    const expected = {
        "_id": "603f51e40f03e30fb0453f85",
        "libelle": "Chaussures en promo",
        "pourcentage": "20",
        "dateValidite": "10/03/2021",
        "__v": 0
      }
    expect(data).toEqual(expected);
});

test("appel get coupons", async () => {
	const data = await getCoupons();
    const expected = [
      {
        "_id": "603f51e40f03e30fb0453f85",
        "libelle": "Chaussures en promo",
        "pourcentage": "20",
        "dateValidite": "10/03/2021",
        "__v": 0
      },
      {
        "_id": "603f51fa0f03e30fb0453f86",
        "libelle": "Tshirts en promo",
        "pourcentage": "35",
        "dateValidite": "20/03/2021",
        "__v": 0
      },
      {
        "_id": "603f521a0f03e30fb0453f87",
        "libelle": "Pantalon en promo",
        "pourcentage": "15",
        "dateValidite": "18/03/2021",
        "__v": 0
      },
      {
        "_id": "603f522a0f03e30fb0453f88",
        "libelle": "Veste en promo",
        "pourcentage": "35",
        "dateValidite": "25/03/2021",
        "__v": 0
      },
      {
        "_id": "603f52440f03e30fb0453f89",
        "libelle": "Chaussette en promo",
        "pourcentage": "50",
        "dateValidite": "30/03/2021",
        "__v": 0
      },
      {
        "_id": "6081e0c0340a4100156922d9",
        "libelle": "test",
        "pourcentage": "20",
        "dateValidite": "tamere",
        "__v": 0
      }
    ]
    expect(data).toEqual(expected);
});