import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Output from './output.jsx';

const Hello = () => <h1>Hello from home</h1>

export default class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={Output} />
                    <Route path='/hello' component={Hello} />
                </div>
            </HashRouter>
        );
    }
}