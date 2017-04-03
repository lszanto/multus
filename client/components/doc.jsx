import React from 'react';

import Output from './output.jsx';
import Editor from './editor.jsx';

export default class Doc extends React.Component {
    constructor() {
        super();

        // set initial state
        this.state = {
            isNew: true,
            content: ''
        };

        this.editorChange = this.editorChange.bind(this);
    }

    editorChange(content) {
        this.setState({
            content: content
        });
    }

    render() {
        return (
            <div className="page" >
                { this.state.isNew ? <Editor title={this.props.match.params.name} editorChange={this.editorChange} /> : null }
                <Output content={this.state.content} />
            </div>
        );
    }
}