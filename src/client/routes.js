import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import TodosPage from './components/todos-page';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={TodosPage} />
    <Route path="/active" component={TodosPage} />
    <Route path="/completed" component={TodosPage} />
    <Route path="/archived" component={TodosPage} />
  </Route>
);

export default routes;
