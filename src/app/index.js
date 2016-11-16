import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    render() {
        var user = {
            name: "Skyepot",
            hobbies: ["Being cute and adorable", "Running around", "Playing cars", "Watching Transformers"]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className=".col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className=".col-xs-10 col-xs-offset-1">
                        <Home name={"Bien Angelo"} age={30} user={user}>
                            <p>This is a sample paragraph...</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}
render(<App/>, window.document.getElementById("app"));