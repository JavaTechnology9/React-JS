import React from "react";
export default class Comment extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="Comment">
            <h2 className="commentAuthor">{this.props.user+":"}</h2>
            <span className="CommentContent">{this.props.content}</span>
        </div>);

    }
}