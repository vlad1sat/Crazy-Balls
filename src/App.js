import Header from "./components/Header";
import React from "react";
import Main from "./components/Main";

export default class App extends React.Component {
    render() {
        return(
            <>
                <Header />
                <Main />
            </>
        );
    }
}