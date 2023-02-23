import React from "react";
import smile from "../img/smile.png";

export default function Ball() {
    const mouseDownBall = evt => {
        const smile = evt.target.parentElement.nodeName === 'DIV'
            ? evt.target.parentElement
            : evt.target;

        const moveSmile = e => {
            smile.style.left = e.pageX - smile.offsetWidth / 2 + 'px';
            smile.style.top = e.pageY - smile.offsetHeight / 2 + 'px';
        }

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
