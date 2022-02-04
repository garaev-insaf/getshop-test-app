interface IChangeSlidesProps {
    val: string,
    marginLeftOfSliderState: number,
    sliderTransitionDurationTime: number,
    imagesState: string[],
    setMarginLeftOfSliderState: React.Dispatch<React.SetStateAction<number>>
}
export const slideByKeys = (event) => {
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

export const changeSlides = <IChangeSlidesProps>(val, marginLeftOfSliderState, sliderTransitionDurationTime, imagesState, setMarginLeftOfSliderState) => {
    // при данном подходе не переключит к следующему слайду, если текущий является крайним и дерево ещё не успело перестроиться, решения данной проблемы пока не нашёл
    // выход с добавлением запасных картинок по краям показался не оптимальным
    if (val == 'left' && marginLeftOfSliderState != 0 && sliderTransitionDurationTime != 0) {
        setMarginLeftOfSliderState(marginLeftOfSliderState + 1);
    }
    else if (val == 'right' && marginLeftOfSliderState != -(imagesState.length - 1) && sliderTransitionDurationTime != 0) {
        setMarginLeftOfSliderState(marginLeftOfSliderState - 1);
    }
}

