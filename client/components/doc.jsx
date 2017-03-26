import React from 'react';

import Output from './output.jsx';

export default class Doc extends React.Component {
    constructor() {
        super();

        // set initial state
        this.state = {
            isNew: true,
            content: '# start typing content'
        };

        this.updateText = this.updateText.bind(this);
    }

    updateText(e) {
        this.setState({
            content: e.target.value
        });
    }

    render() {
        return (
            <div className="page" >
                <div className="editor item" >
                    <h1>{this.props.match.params.name} Doc</h1>

                    <textarea onChange={this.updateText} value={this.state.content} ></textarea>
                </div>

                <Output content={this.state.content} />
            </div>
        );
    }
}