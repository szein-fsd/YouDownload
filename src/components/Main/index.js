import React from 'react';
import {Switch , Route } from 'react-router-dom';
import SearchVideo from '../../containers/SearchVideo';
import Serie from '../../containers/Serie';

const Main = props=> (
    <Switch>
        <Route exact path="/" component={SearchVideo}/>
        <Route path="/series/:id" component={Serie} />
    </Switch>
);

export default Main;

