import React from "react";
import smile from "../img/smile.png";
import bad from "../img/bad.png";

export default function Ball({ mood }) {
    const mouseDownBall = evt => {
        const smile = evt.target.parentElement.nodeName === 'DIV'
            ? evt.target.parentElement
            : evt.target;

        const moveSmile = e => {
            const getStyleSmile = (sizePage, sizeSmile) => sizePage - sizeSmile / 2 + 'px';

            const allSizeSmile = smile.getBoundingClientRect();
            smile.style.left = getStyleSmile(e.pageX, allSizeSmile.width);
            smile.style.top = getStyleSmile(e.pageY, allSizeSmile.height);
        };

        document.addEventListener('mousemove' , moveSmile);

        smile.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', moveSmile);
        });

        smile.ondragstart = () => false;
    }

    const getPositionElement = (sizeWindow) => {
        let coordinate = Math.random() * sizeWindow - 220;
        if (coordinate < 0) coordinate = 0;
        return coordinate;
    }

    const positionElement = {
        left: getPositionElement(window.innerWidth),
        top: getPositionElement(window.innerHeight)
    }

    return (
        <div className="ball" onMouseDown={mouseDownBall} style={positionElement}>
            <img src={mood ? smile : bad} alt="ball"/>
        </div>
    );
}
