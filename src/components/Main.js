import React from "react";
import FormCreateBall from "./FormCreateBall";
import Ball from "./Ball";
export default class Main extends React.Component {
    render() {
        return (
            <main>
                <FormCreateBall />
                <Ball />
            </main>
        );
    }
}