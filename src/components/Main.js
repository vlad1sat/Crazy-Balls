import React from "react";
import FormCreateBall from "./FormCreateBall";
import Ball from "./Ball";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.setCountBalls = this.setCountBalls.bind(this);
        this.setIsHappy = this.setIsHappy.bind(this);
        this.clickButtonForm = this.clickButtonForm.bind(this);
        this.appendBalls = this.appendBalls.bind(this);
        this.onCleanBalls = this.onCleanBalls.bind(this);

        this.state = {
            countBalls: 1,
            isHappy: false,
            balls: [<Ball />]
        }
    }

    setCountBalls(value) {
        this.setState({ countBalls: value });
    }

    setIsHappy(value) {
        this.setState( { isHappy: value });
    }

    clickButtonForm(evt) {
        evt.preventDefault();
        this.appendBalls(this.state.countBalls);
    }

    onCleanBalls() {
        this.appendBalls(0);
    }

    appendBalls(lengthBalls) {
        let newBalls = [];
        newBalls.length = lengthBalls;
        newBalls.fill(<Ball />);
        this.setState( { balls: [...newBalls]});
    }

    render() {
        return (
            <main>
                <FormCreateBall onChangeCountBalls={ this.setCountBalls }
                                onChangeMood={ this.setIsHappy }
                                onClickButton={ this.clickButtonForm }
                                onCleanBalls={ this.onCleanBalls }
                />
                {this.state.balls}
            </main>
        );
    }
}