import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import AddFlower from './components/add-flower-without-hook';
import AddFlower2 from './components/add-flower';
import ListFlower from './components/list-flowers';
import UpdateFlower from './components/update-flower';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact
                    path="/"
                    component={ListFlower}
                />
                <Route exact
                    path="/flower/add"
                    component={AddFlower}
                />
                <Route exact
                    path="/flower/update/:id"
                    component={UpdateFlower}
                />
                <Route exact
                    path="/flower/add2"
                    component={AddFlower2}
                />
            </Switch>
        </Router>
    );
}

export default AppRouter;