const initState = {
	coupons: [],
};

function updateObject(oldObject, newValues) {
	// Encapsulate the idea of passing a new object as the first parameter
	// to Object.assign to ensure we correctly copy data instead of mutating
	return Object.assign({}, oldObject, newValues);
}

function addCoupon(state, action) {
	if (state.coupons?.find(coupon => coupon.id === action.id)) {
		const newCoupon = state.coupons.concat({
			id: action.id,
			libelle: action.libelle,
			pourcentage: action.pourcentage,
			dateValidite: action.dateValidite,
		});

		return updateObject(state, { coupons: newCoupon });
	}
}

export function couponReducer(state = initState, action) {
	switch (action.type) {
		case "ADD_COUPON":
			return addCoupon(state, action);
		default:
			return state;
	}
}
