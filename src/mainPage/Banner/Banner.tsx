import * as React from 'react';
// import { Dispatch } from "redux";
// import { appStore } from "../../Store/Store.js"
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { setVideoTimeLine } from '../../Actions/VideoAction';
import './styles/Banner.scss'
interface IBannerProps {
    bannerFlagState: boolean,
    setVideoTimeLine(time: number): void
    video: React.MutableRefObject<HTMLVideoElement>,
}

const Banner: React.FC<IBannerProps> = ({ bannerFlagState, setVideoTimeLine, video }) => {
    const handleClick = () => {
        setVideoTimeLine(video.current.currentTime);
    }
    return (
        <div className="banner-wrapper" >
            <div className={`banner  ${bannerFlagState ? 'active' : 'passive'}`}>

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
                    onClick={handleClick}
                >
                    ОК
                </Link>
            </div>
        </div >
    )
}

const mapDispatchToProps = {
    setVideoTimeLine,
}

export default connect(null, mapDispatchToProps)(Banner);