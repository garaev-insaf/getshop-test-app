import axios from "axios";

const access_key = '52e717957ab847eece6daf2c059f7b18';

export const getNumberValidation = (phone_number: string) => {
    console.log("проверка на валидность", phone_number);
    return async (dispatch: any) => {
        dispatch({
			type: "SHOW_LOADER",
		});
        await axios
            .get(
                'http://apilayer.net/api/validate?access_key=' + access_key,
                {
                    params: {
						number: phone_number,
					},
                }
            )
            .then((number) => {
                console.log(number);
                dispatch({
                    type: "GET_NUMBER_VALIDATION",
                    number,
                });
                dispatch({
					type: "HIDE_LOADER",
				});
            })
            .catch((error) => {
                console.log(error);
            });
    };
};