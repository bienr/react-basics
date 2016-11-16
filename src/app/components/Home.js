import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: "Frommy"
        }
        setInterval(() => {
            this.setState({
                status: this.state.status += 1
            });
        }, 1000);
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onMakeOlder() {
        this.setState({
           age: this.state.age + 3
        });
    }

    render() {
        return (
            <div>
                <p>This is Home Component!</p>
                <p>You are {this.props.name}, {this.state.age} years old.</p>
                <p>Time: {this.state.status} seconds</p>
                <button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Make me older!</button>&nbsp;&nbsp;
                <button className="btn btn-success" onClick={this.props.greet}>Greeter</button>
                <hr/>
                <button className="btn btn-info" onClick={this.onChangeLink.bind(this)}>Change name</button>
                <input type="text"/>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func,
    changeLink: React.PropTypes.func,
    homeLink: React.PropTypes.string
};