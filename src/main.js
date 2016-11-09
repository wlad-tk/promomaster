import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import './styles/jquery.fullPage.css';

// import App from './App.jsx';
// import AboutPage from './components/AboutPage.jsx';
// import InboxPage from './components/InboxPage.jsx';
// import Message from './components/Message.jsx';

import FirstBlock from './components/FirstBlock.jsx';
import Home from './components/content/Home.jsx';
import Horeca from './components/content/Horeca.jsx';
// import Clothes from './components/content/Clothes.jsx';
// import Decol from './components/content/Decol.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
        {/*<Route path='/' component={App}>*/}
            {/*<IndexRoute component={AboutPage}/>*/}
            {/*<Route path='/about' component={AboutPage} />*/}
            {/*<Route path='/inbox' component={InboxPage}>*/}
                {/*<Route path='/inbox/messages/:messageId' component={Message} />*/}
            {/*</Route>*/}
        {/*</Route>*/}
        <Route path='/' component={FirstBlock}>
            <IndexRoute component={Home}/>
            <Route path='/horeca' component={Horeca} />
            {/*<Route path='/fb/clothes' component={Clothes} />*/}
            {/*<Route path='/fb/decol' component={Decol} />*/}
        </Route>
    </Router>,
    document.getElementById('first')
);