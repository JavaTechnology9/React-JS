import React from "react";

export default class CreateComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            context: '',
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
        this.setState(()=>({user:'',context:''}));

    }
    handleTextChange(e){
        const uservalue=e.target.value;
        this.setState(()=>({context:uservalue}));
    }
    render() {
        return React.createElement("form", { className: "createForm",onSubmit: this.handleSubmit },
            React.createElement("input", { type: 'text', placeholder: 'Your Name', value: this.state.user, onChange: this.handleUserChange }),
            React.createElement("input", { type: 'text', placeholder: 'Your Thoughts?', value: this.state.context, onChange: this.handleTextChange }),
            React.createElement("input", { type: 'submit', value: 'Post' }));
    }
}
