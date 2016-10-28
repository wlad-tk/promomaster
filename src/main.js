import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App.jsx';
import AboutPage from './components/AboutPage.jsx';
import InboxPage from './components/InboxPage.jsx';
import Message from './components/Message.jsx';
import Home from './components/Home.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={AboutPage}/>
            <Route path='/about' component={AboutPage} />
            <Route path='/inbox' component={InboxPage}>
                <Route path='/inbox/messages/:messageId' component={Message} />
            </Route>
        </Route>
        <Route path='/home' component={Home}/>
    </Router>,
    document.getElementById('mount-point')
);