import React from "react";

export class Home extends React.Component {
    render() {
        var text = "Text Something...";
        return (
            <div>
                <p>This is Home Component!</p>
                <p>{text}</p>
                <p>You are {this.props.name}, {this.props.age} years old. And you love {this.props.user.name}</p>
                <div>
                    <h4>His Hobbies include:</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
};