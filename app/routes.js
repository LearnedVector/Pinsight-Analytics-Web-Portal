import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './views/containers/App'
import MainView from './views/containers/MainView'
import EventsTablesView from './views/containers/EventsTableView';
import EventsView from './views/components/EventsView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainView} />
    <Route path="/users" component={MainView} />
    <Route path="/sessions" component={MainView} />
    <Route path="/events" component={EventsTablesView} >
      <Route path="/events/:id" component={EventsView}/>
    </Route>
  </Route>
);
