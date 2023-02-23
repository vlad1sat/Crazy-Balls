import React from "react";

export default class FormCreateBall extends React.Component {
    render() {
        return (
            <div className="form-ball">
                <form>
                    <p className="form-header-text">СОЗДАНИЕ BALLS</p>
                    <ElementForm text="Количество шариков:" typeInput="number" classCss="form-input-text"/>
                    <ElementForm updateData={this.updateData} text="Веселый:" typeInput="checkbox" classCss="form-input-checkbox"/>
                    <button type="button" className="form-button">Отрисовать</button>
                </form>
            </div>
        );
    }
}

function ElementForm({ text, typeInput, classCss, updateData }) {
    return (
        <div className="input-form">
            <label>{text}</label>
            <input className={classCss} type={typeInput} />
        </div>
    );
}