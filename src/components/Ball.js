import React from "react";
import smile from "../img/smile.png";

export default class Ball extends React.Component {
    render() {
        return (
            <div className="ball" >
                <p>{}</p>
                <img src={smile} alt="ball"/>
            </div>
        );
    }
}