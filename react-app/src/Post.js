import React from "react";

export default class Post extends React.Component {
    render() {
        return (
            React.createElement("div", { className: "post" },
                React.createElement("h2", { className: "postAuthor", id: this.props.id }, this.props.user),
                React.createElement("span", { className: "postSpan" }, this.props.content))
        );
    }
}
