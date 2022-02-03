import * as React from "react";
import { useEffect, useState } from "react";
import "./styles/FinalPromo.scss";
import "../../../public/fonts.css";
import { ExitComponent } from "../universal/ExitComponent/ExitComponent";
import { popAndUnshiftActionWithArray } from "../scripts/scripts";
import { changeSlides } from "./scripts/ChangeSlides";

const TRANSITION_DURATION_TIME = 300; // время анимации слайдера

const FinalPromo = () => {
    // Задача реализовать бесконечный слайдер, не зависящий от кол-ва слайдов (если мы добавим или убавим их кол-во слайдер продолжит корректно работать) ♥
    let initialImagesDictionary = [
        "/images/slider-img/first-img.png", "/images/slider-img/second-img.png", "/images/slider-img/third-img.png"
    ];
    const [marginLeftOfSliderState, setMarginLeftOfSliderState] = useState(-1);
    const [imagesState, setImagesState] = useState(() => popAndUnshiftActionWithArray(initialImagesDictionary)); // берём стейт с добавленными по обе стороны слайдами
    const [sliderTransitionDurationTime, setSliderTransitionDurationTime] = useState(TRANSITION_DURATION_TIME);

    const handleSlideChangeClick = (val: string) => {
        changeSlides(val, marginLeftOfSliderState, sliderTransitionDurationTime, imagesState, setMarginLeftOfSliderState);
    }

    useEffect(() => {
        // Если мы достигли конечного слайда, обнуляем transition duration
        if (marginLeftOfSliderState == 0 || marginLeftOfSliderState == -(imagesState.length - 1)) {
            setTimeout(() =>
                setSliderTransitionDurationTime(0), TRANSITION_DURATION_TIME)

        }
    }, [marginLeftOfSliderState]);
    useEffect(() => {
        if (marginLeftOfSliderState == 0) {
            setMarginLeftOfSliderState(-(imagesState.length - 2)); // вычитаем два, т.к. добавили в начало в конец по одному элементу
            setTimeout(() => setSliderTransitionDurationTime(TRANSITION_DURATION_TIME), 50)
        }
        else if (marginLeftOfSliderState == -(imagesState.length - 1)) {
            setMarginLeftOfSliderState(-1);
            setTimeout(() => setSliderTransitionDurationTime(TRANSITION_DURATION_TIME), 50)
        }
        else if (sliderTransitionDurationTime == 0) {
            setTimeout(() => setSliderTransitionDurationTime(TRANSITION_DURATION_TIME), 50)
        }

    }, [sliderTransitionDurationTime])

    const slideByKeys = (event) => {
        const e = event || window.event;
        // для стрелок
        if (e.keyCode == '37' || e.keyCode == '38') {
            // left arrow
            const leftButton = document.getElementById('prew-button');
            leftButton.style.background = "#e8e8e8";
            leftButton.click()
            setTimeout(() => leftButton.style.background = "#181d28", 150)


        } else if (e.keyCode == '39' || e.keyCode == '40') {
            // right arrow
            const rightButton = document.getElementById('next-button');
            rightButton.style.background = "#e8e8e8";
            rightButton.click()
            setTimeout(() => rightButton.style.background = "#181d28", 150)

        }
    }
    useEffect(() => {
        document.onkeydown = (e) => slideByKeys(e);

        return () => {
            document.onkeydown = null;
        };
    }, [marginLeftOfSliderState, sliderTransitionDurationTime]);


    return (
        <div className="final-promo" >
            <ExitComponent />

            <div className="slider">
                <div className="navigation-panel">
                    <button className="button_left-arrow" onClick={() => handleSlideChangeClick('left')} id='prew-button'>
                        <img src="/images/icons/left-arrow.svg" alt="left-arrow" />
                    </button>
                    <button className="button_right-arrow" onClick={() => handleSlideChangeClick('right')} id='next-button'>
                        <img src="/images/icons/right-arrow.svg" alt="right-arrow" />
                    </button>
                </div>
                <div className="slider-wrapper">

                    <div
                        style={{ marginLeft: `${marginLeftOfSliderState * 1280}px`, transitionDuration: `${sliderTransitionDurationTime}ms` }}
                        className="current-slider"
                    >
                        {
                            imagesState.length > 0 ?
                                imagesState.map((imageSrc, index) =>
                                    <img src={imageSrc} key={index} alt="current-slide" />
                                ) : null
                        }

                    </div>
                </div>

            </div>
        </div >
    );
};
export { FinalPromo };
