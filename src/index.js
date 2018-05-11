import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, HashRouter, Route } from 'react-router-dom';

import './index.css';

import App from './app/App';
import About from './app/about/AboutPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={About} />
        </Switch>
    </HashRouter>
    , document.querySelector('.root'));
registerServiceWorker();