interface IChangeSlidesProps {
    val: string,
    marginLeftOfSliderState: number,
    sliderTransitionDurationTime: number,
    imagesState: string[],
    setMarginLeftOfSliderState: React.Dispatch<React.SetStateAction<number>>
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

