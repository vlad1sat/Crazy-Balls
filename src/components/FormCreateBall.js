import React from "react";

export default class FormCreateBall extends React.Component {
    render() {
        return (
            <div className="form-ball">
                <form onSubmit={this.props.onClickButton}>
                    <p className="form-header-text">СОЗДАНИЕ BALLS</p>
                    <CountBalls updateData={this.props.onChangeCountBalls} />
                    <MoodBalls updateData={this.props.onChangeMood} />
                    <ButtonForm text="Отрисовать" clickButton={this.props.onClickButton} />
                    <ButtonForm text="Отчистить" clickButton={this.props.onCleanBalls} />
                </form>
            </div>
        );
    }
}

function ButtonForm({ text, clickButton }) {
    return <button type="button" className="form-button" onClick={clickButton}>{text}</button>;
}

function CountBalls({ updateData }) {
    return (
        <div className="input-form">
            <label>{"Количество шариков:"}</label>
            <input className="form-input-text" type="number" min="0" step="1" placeholder="Введите значения от 0"
                   onChange={evt => updateData(evt.target.value)} />
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