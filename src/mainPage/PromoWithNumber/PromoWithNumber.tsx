import * as React from "react";
import { useEffect, useState } from "react";
import "./styles/PromoWithNumber.scss";
import "../../../public/fonts.css";
import { NumBoard } from "./NumBoard/NumBoard";
import { ChangeNumbers } from "./NumBoard/Scripts/FillingNumbers";

const PromoWithNumber = () => {
    const phoneMask: string = '+7(___)___-__-__'
    const [phoneInputValueState, setPhoneInputValueState] = useState('+7(___)___-__-__');

    const handeInputKeyDown = (event: any) => {
        ChangeNumbers(event, {phoneInputValueState, setPhoneInputValueState });
    }
    const handleInputChange = (event) => {
        event.preventDefault();
    }
    return (
        <div className="promo-with-number" style={{ background: "url('images/van-damme-promo-image.jpg')" }}>
            <aside className="number-promo-aside">
                <form className="number-promo-form">
                    <div className="number-promo-header">
                        <h1 className="number-promo-header-text">Введите ваш номер мобильного телефона</h1>
                    </div>
                    <div className="input-holder">
                        <input type="text" name="phone" id="phone" className="input-holder__input" value={phoneInputValueState} onKeyDown={(event) => handeInputKeyDown(event)} onChange={(e) => handleInputChange(e)} />
                        <div className="input-holder__description"><p>и с Вами свяжется наш менеждер для дальнейшей консультации</p></div>
                    </div>
                    <NumBoard phoneInputValueState={phoneInputValueState} setPhoneInputValueState={setPhoneInputValueState} />
                </form>
            </aside>
        </div>
    );
};
export { PromoWithNumber };
