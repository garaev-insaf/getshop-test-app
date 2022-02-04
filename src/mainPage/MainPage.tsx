import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Banner from './Banner/Banner';
import { connect } from 'react-redux';
import { appStore } from "../Store/Store.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setVideoTimeLine } from '../Actions/VideoAction';
import "./styles/MainPage.scss";
import "../../public/fonts.css";
import PromoWithNumber from "./PromoWithNumber/PromoWithNumber";
import { FinalPromo } from "./FinalPromo/FinalPromo";

interface IProps {
    setVideoTimeLine(time: number): void,
    videoTimeLineState: number,
}

const MainPage = ({ setVideoTimeLine, videoTimeLineState }) => {
    const video = useRef<HTMLVideoElement>(null!);
    const [bannerFlagState, setBannerFlagState] = useState(() => false);
    const handleOnTimeUpdate = () => {
        // хенлдер обновления времени премени
        if (video.current.currentTime >= 5) {
            setBannerFlagState(() => true);
        }
    }
    console.log(videoTimeLineState);
    // при загрузке первого фрейма видео проверяем хранится ли в состоянии сохранённое время
    const handeOnLoadedData = () => {
        if (videoTimeLineState > 0) {
            video.current.currentTime = videoTimeLineState;
            setVideoTimeLine(0);
        }
    }
    return (
        <div className="main-page">
            <div className="main-page-wrapper">
                <div
                    className="main-page-smarttv-wrap"
                    style={{ background: "url('images/smarttv.png')" }}
                ></div>
                <Switch>
                    <Route exact path="/">
                        <div className="main-page-background-video">
                            <video ref={video} id="promo-video" width={1280} height={720} loop={true} autoPlay={true} onLoadedData={handeOnLoadedData} onTimeUpdate={handleOnTimeUpdate} muted>
                                <source src="videos/promo.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <Banner bannerFlagState={bannerFlagState} video={video} />
                    </Route>
                    <Route path="/number-input">
                        <PromoWithNumber />

                    </Route>
                    <Route path="/final-promo">
                        <FinalPromo />

                    </Route>
                </Switch>

            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        videoTimeLineState: state.video,
    };
};

const mapDispatchToProps = {
    setVideoTimeLine,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

