import React from "react";
export default class Secret extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'top Secret!'
        }
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick() {
        this.setState({
            name: 'Changing the state value =Mark'
        })
    }
    render() {
        return (<div>
            <h1>My Name is {this.state.name}</h1>
            <button onClick={this.onButtonClick}> reveal the secret!</button>
        </div>);
    }
}