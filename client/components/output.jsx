import React from 'react';
import showdown from 'showdown';

export default class Output extends React.Component {
    constructor() {
        super();
        this.state = {
            markdown: '#hello, markdown!'
        };

        this.updateText = this.updateText.bind(this);
    }

    updateText(e) {
        this.setState({
            markdown: document.getElementById('texta').value
        });
    }

    render() {
        var converter = new showdown.Converter();
        var html = converter.makeHtml(this.state.markdown);
        return (
            <div id="out" >
                <div>
                    <textarea id="texta" onKeyUp={this.updateText} >Hello</textarea>
                </div>
                <div dangerouslySetInnerHTML={{__html: html}} ></div>
            </div>
        );
    }
}