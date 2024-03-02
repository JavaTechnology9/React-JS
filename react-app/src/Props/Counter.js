import React from "react";
import PropTypes from "prop-types";
export default class Counter extends React.Component{
    static propTypes={
        incrementBy: PropTypes.number.isRequired,
        //onIncrement: PropTypes.func.isRequired
    }
    static defaultProp={
        incrementBy:1
    }
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        this.onButtonClick=this.onButtonClick.bind(this);
    }
    onButtonClick(){
        this.setState(function(prevState,props){
            return {count: prevState.count+props.incrementBy}
        });
    }
    render(){
        return(<div>
            <h1>{this.state.count}</h1>
            <button onClick={this.onButtonClick}>++</button>
        </div>)
    }
}