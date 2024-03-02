import React from "react";
import Post from "./Post";
import CreateComment from "./CreateComment";
import Comment from "./Comment";

export default class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments,
            post: this.props.post
        }
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    handleCommentSubmit(comment) {
        const oldComments = this.state.comments;
        comment.id = Date.now();
        console.log(Date.now());
        const newComments = oldComments.concat([comment]);
        this.setState(() => ({ comments: newComments }))

    }
    render() {
        return React.createElement("div", { className: 'CommentBox' },
            React.createElement(Post, { 
                id: this.props.post.id, 
                user: this.props.post.user, 
                content: this.props.post.content
            }),
            this.state.comments.map(function (comment) {
                return React.createElement(Comment, 
                    { key: comment.id, 
                        id: comment.id, 
                        content: comment.content, 
                        user: comment.user 
                    })
            }),
            React.createElement(CreateComment, { onCommentSubmit: this.handleCommentSubmit }))
    }

}