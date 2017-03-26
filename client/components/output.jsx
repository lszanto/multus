import React from 'react';
import showdown from 'showdown';

export default class Output extends React.Component {
    constructor(props) {
        super();

        // set a markdown converter
        this.toMarkdown = new showdown.Converter();
    }

    render() {
        var html = this.toMarkdown.makeHtml(this.props.content);
        return (
            <div className="output item markdown" >
                <div dangerouslySetInnerHTML={{__html: html}} ></div>
            </div>
        );
    }
}