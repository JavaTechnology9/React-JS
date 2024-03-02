import React from "react";
import PropTypes from "prop-types";

export default class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <h2 className="postAuthor" id={this.props.id}>{this.props.user+": "}</h2>
                <span className="postSpan">{this.props.content}</span>
            </div>

        );
    }
}
Post.proptype = {
    id: PropTypes.number.isRequired
}
