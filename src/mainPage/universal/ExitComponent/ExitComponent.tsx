import * as React from "react";
import { Link } from "react-router-dom";
import "./styles/ExitComponent.scss";

const ExitComponent = () => {
    return (
        <div className="exit-button-wrapper"><Link
            to={{
                pathname: "/",
            }}
            className="button_exit"
        >
            <img src="images/icons/close-icon.svg" alt="close" />
        </Link></div>

    );
};
export { ExitComponent };
