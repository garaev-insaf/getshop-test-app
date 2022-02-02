import * as React from 'react';
import { Link } from "react-router-dom";
import './styles/Banner.scss'


const Banner = () => {


    return (
        <div className="banner" >
            <header className="banner-header">
                <h2 className="header-text">ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
                    <br /> ПОДАРИТЕ ЕМУ СОБАКУ!</h2>
            </header>
            <div className="qr-code-image"><img src="images/qr-code.png" alt="exit" /></div>
            <div className="description"><p className="description-text">Сканируйте QR-код
                или нажмите ОК</p></div>
            <Link
                to={{
                    pathname: "/number-input",
                }}
                className="button_select"
            >
                ОК
            </Link>
        </div >
    )
}
export { Banner };