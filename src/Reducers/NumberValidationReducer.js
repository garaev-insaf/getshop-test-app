const NumberValidationReducer = (number, action) => {
	switch (action.type) {
		case "GET_NUMBER_VALIDATION":
			console.log(action.number)
			return action.number.data;
		default:
			return 0;
	}
};

export { NumberValidationReducer };