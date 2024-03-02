import React from "react";

export default class CreateComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            user: ''
        };
        this.handleUserChange=this.handleUserChange.bind(this);
        this.handleTextChange=this.handleTextChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleUserChange(e){
        const uservalue=e.target.value;
        this.setState(()=>({user:uservalue}));
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onCommentSubmit({
            user: this.state.user.trim(),
            content: this.state.content.trim()
        });
        this.setState(()=>({user:'',content:''}));

    }
    handleTextChange(e){
        const context=e.target.value;
        this.setState(()=>({content:context}));
    }
    render() {
        return (<div>
            <form className="createForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your Name" value={this.state.user} onChange={this.handleUserChange}></input>
                <input type="text" placeholder="Your Thoughts?" value={this.state.content} onChange={this.handleTextChange}></input>
                <input type="submit" value='post'/>
            </form>
        </div>);
        
    }
}
