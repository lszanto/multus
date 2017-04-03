import React from 'react';

export default class Editor extends React.Component {
    constructor(props) {
        super();

        this.state = {
            content: props.defaultValue
        };

        this.updateText = this.updateText.bind(this);
    }

    updateText(e) {
        this.setState({
            content: e.target.value
        });

        this.props.editorChange(e.target.value);
    }

    render() {
        return (
            <div className="editor item" >
                <h1>{this.props.title} Doc</h1>

                <textarea onChange={this.updateText} value={this.state.content} ></textarea>
            </div>
        );
    }
}