import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Home from './home.jsx';
import Doc from './doc.jsx';

export default class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/doc/:name" component={Doc} />
                </div>
            </HashRouter>
        );
    }
}