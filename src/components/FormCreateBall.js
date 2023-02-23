import React from "react";

export default class FormCreateBall extends React.Component {
    render() {
        return (
            <div className="form-ball">
                <form onSubmit={this.props.onClickButton}>
                    <p className="form-header-text">СОЗДАНИЕ BALLS</p>
                    <CountBalls updateData={this.props.onChangeCountBalls} />
                    <MoodBalls updateData={this.props.onChangeMood} />
                    <button type="button" className="form-button" onClick={this.props.onClickButton}>Отрисовать</button>
                </form>
            </div>
        );
    }
}

function CountBalls({ updateData }) {
    return (
        <div className="input-form">
            <label>{"Количество шариков:"}</label>
            <input className="form-input-text" type="number" onChange={evt => updateData(evt.target.value)} />
        </div>
    );
}

function MoodBalls( { updateData }) {
    return (
        <div className="input-form">
            <label>{"Веселый:"}</label>
            <input className="form-input-checkbox" type="checkbox" onChange={evt => updateData(evt.target.checked)} />
        </div>
    );
}