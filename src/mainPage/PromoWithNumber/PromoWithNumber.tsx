import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/PromoWithNumber.scss";
import { connect } from 'react-redux';
import "../../../public/fonts.css";
import { NumBoard } from "./NumBoard/NumBoard";
import { ChangeNumbers } from "./NumBoard/Scripts/FillingNumbers";
import { ExitComponent } from "../universal/ExitComponent/ExitComponent";
import { QrCodeAnnotation } from "../universal/QrCodeAnnotation/QrCodeAnnotation";
import { getNumberValidation } from "../../Actions/PhoneValidationAction";

interface IProps {
    setVideoTimeLine(phone_number: string): void,
    phoneValidStatus: any,
    loaderStatus: boolean,
}

const PromoWithNumber = ({ getNumberValidation, phoneValidStatus, loaderStatus }) => {
    const phoneMask: string = '+7(___)___-__-__'
    const [phoneInputValueState, setPhoneInputValueState] = useState('+7(___)___-__-__');
    const [numberValidState, setNumberValidState] = useState(() => false); // состояние валидности номера
    const [fullingNumberState, setFullingNumberState] = useState(() => false); // состояние заполненности номера
    const [privacyCheckboxState, setPrivacyCheckboxState] = useState(() => false); // состояние принятия обработки данных
    const [numberError, setNumberError] = useState(() => false);

    const handeInputKeyDown = (event: any) => {
        ChangeNumbers(event, { phoneInputValueState, setPhoneInputValueState });
    }

    const handleInputChange = (event) => {
        event.preventDefault();
    }

    const handleChangeChk = () => {
        setPrivacyCheckboxState(!privacyCheckboxState);
    }
    // const handleClick = () => {
    //     getNumberValidation(phoneInputValueState.replace(/[^\d]/g, ''))
    // }

    useEffect(() => {
        if (phoneInputValueState.replace(/[^\d]/g, '').length == 11) {
            getNumberValidation(phoneInputValueState.replace(/[^\d]/g, ''))
            setFullingNumberState(() => true);
        }
        else {
            setFullingNumberState(() => false);
        }
    }, [phoneInputValueState]);

    useEffect(() => {
        console.log(fullingNumberState);
        console.log(!!phoneValidStatus.valid);
        console.log(phoneValidStatus.valid);
        if (!numberValidState && fullingNumberState && loaderStatus.loading == false) {
            setNumberError(() => true);
        }
        else {
            setNumberError(() => false);
        }
    }, [numberValidState, fullingNumberState, loaderStatus]);

    useEffect(() => {
        if (typeof phoneValidStatus.valid !== 'undefined') {
            setNumberValidState(phoneValidStatus.valid);
        }
    }, [phoneValidStatus]);

    return (
        <div className="promo-with-number" style={{ background: "url('images/van-damme-promo-image.jpg')" }}>
            <ExitComponent />
            <QrCodeAnnotation />
            <aside className="number-promo-aside">
                <form className="number-promo-form">
                    <div className="number-promo-header">
                        <h1 className="number-promo-header-text">Введите ваш номер мобильного телефона</h1>
                    </div>
                    <div className="input-holder">
                        <input type="text" name="phone" id="phone" className={`input-holder__input ${numberError ? 'error' : null}`} value={phoneInputValueState} onKeyDown={(event) => handeInputKeyDown(event)} onChange={(e) => handleInputChange(e)} />
                        <div className="input-holder__description"><p>и с Вами свяжется наш менеждер для дальнейшей консультации</p></div>
                    </div>
                    <NumBoard phoneInputValueState={phoneInputValueState} setPhoneInputValueState={setPhoneInputValueState} />
                    {loaderStatus.loading ?
                        <div className="checking-status">
                            <img src="images/gifs/loader-gif.gif" alt="loader" />
                            <p>Проверяем ваш номер на валидность</p>
                        </div>
                        : numberError ?
                            <div className="checking-status">
                                <p className="error-notification">НЕВЕРНО ВВЕДЁН НОМЕР</p>
                            </div>
                            : <div className="agree-policy-block">
                                <input type="checkbox" className="agree-checkbox" id="agree-checkbox" name="agree-checkbox" defaultChecked={privacyCheckboxState} onChange={handleChangeChk} />
                                <label htmlFor="agree-checkbox">Согласие на обработку персональных данных</label>
                            </div>}

                    <Link
                        to={{
                            pathname: "/final-promo",
                        }}
                        className={`button_select-number ${!privacyCheckboxState || !numberValidState ? 'disabled' : null}`}
                    // onClick={() => handleClick()}
                    >Подтвердить номер
                    </Link>
                </form>
            </aside>
        </div >
    );
};
const mapStateToProps = (state: any) => {
    return {
        phoneValidStatus: state.numberValid,
        loaderStatus: state.loadingStatus,
    };
};

const mapDispatchToProps = {
    getNumberValidation,
}

export default connect(mapStateToProps, mapDispatchToProps)(PromoWithNumber);

