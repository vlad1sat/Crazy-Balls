import React from "react";
import smile from "../img/smile.png";

export default function Ball() {
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

        smile.addEventListener('mousemove' , moveSmile);

        smile.addEventListener('mouseup', () => {
            smile.removeEventListener('mousemove', moveSmile);
        });

        smile.ondragstart = () => false;
    }

    return (
        <div className="ball" onMouseDown={mouseDownBall} >
            <img src={smile} alt="ball"/>
        </div>
    );
}
