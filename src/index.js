import ReactDOM from 'react-dom';
import React from 'react';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

import FirstBlock from './components/FirstBlock';
import Home from './components/content/Home';
import Horeca from './components/content/Horeca';
import Clothes from './components/content/Clothes';
import Decol from './components/content/Decol';

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