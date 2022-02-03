export const setVideoTimeLine = (time: number) => {
    return (dispatch: any) => {
        dispatch({
            type: "PAUSED_VIDEO_WITH_TIME",
            stoppedTime: time,
        })
    };
};