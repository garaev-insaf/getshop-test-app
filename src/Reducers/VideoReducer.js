const VideoReducer = (stoppedTime, action) => {
	switch (action.type) {
		case "PAUSED_VIDEO_WITH_TIME":
			console.log(action.stoppedTime)
			return action.stoppedTime;
		default:
			return 0;
	}
};

export { VideoReducer };