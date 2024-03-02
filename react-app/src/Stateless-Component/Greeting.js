import React from "react";
import PropTypes from "prop-types";
export default function Greeting(props){
    return <div>Hello: {props.for}</div>
}
Greeting.proptype={
    for: PropTypes.string.isRequired
};
Greeting.defaultProps={
    for:'Friend'
};