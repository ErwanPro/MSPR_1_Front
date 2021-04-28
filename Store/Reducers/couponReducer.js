const initState = {
	coupons: [],
};

/**
 * Fonction qui ajoute un coupon au store global
 * @param {*} state 
 * @param {*} action 
 * @returns state
 */
function addCoupon(state, action) {
	if (!state.coupons.find(coupon => coupon.id === action.id)) {
		const newCoupon = state.coupons.concat({
			id: action.id,
			libelle: action.libelle,
			pourcentage: action.pourcentage,
			dateValidite: action.dateValidite,
		});

		return { ...state, coupons: newCoupon };
	}
	return state;
}

/**
 * Fonction qui gère les coupons dans le store
 * @param {*} state 
 * @param {*} action 
 * @returns next state
 */
export function couponReducer(state = initState, action) {
	switch (action.type) {
		case "ADD_COUPON":
			return addCoupon(state, action);
		default:
			return state;
	}
}
