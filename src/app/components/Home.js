import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        }
        setInterval(() => {
            this.setState({
                status: this.state.status += 1
            });
        }, 1000);
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
                <p>Status: {this.state.status}</p>
                <button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Make me older!</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number
};