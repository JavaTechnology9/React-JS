import React from "react";
export default class Comment extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement("div", { className: 'Comment' },
                //React.createElement("p", { className: 'Comment' },'Comment Data'),
            React.createElement("h2", { className: "commentAuthor" }, this.props.user),
            React.createElement("span", {className:"commentContent"}, this.props.content));
    }
}