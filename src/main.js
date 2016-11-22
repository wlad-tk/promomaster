import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import FirstBlock from './components/FirstBlock.jsx';
import Home from './components/content/Home.jsx';
import Horeca from './components/content/Horeca.jsx';
import Clothes from './components/content/Clothes.jsx';
import Decol from './components/content/Decol.jsx';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={FirstBlock}>
            <IndexRoute component={Home}/>
            <Route path='/horeca' component={Horeca} />
            <Route path='/clothes' component={Clothes} />
            <Route path='/decol' component={Decol} />
        </Route>
    </Router>,
    document.getElementById('first')
);