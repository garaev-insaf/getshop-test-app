import * as React from "react";
// import { useEffect, useState } from "react";
import { Banner } from './Banner/Banner';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/MainPage.scss";
import "../../public/fonts.css";
import { PromoWithNumber } from "./PromoWithNumber/PromoWithNumber";

const MainPage = () => {
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
                            <video id="promo-video" width={1280} height={720} loop={true} autoPlay={true} muted>
                                <source src="videos/promo.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <Banner />
                    </Route>
                    <Route path="/number-input">
                        <PromoWithNumber />
                    </Route>
                </Switch>

            </div>
        </div>
    );
};
export { MainPage };
