import * as React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { CustomRoute } from '../customRoute';
import { Layout } from '../layout';
import { AppRouteProps } from "./customRoute.model";
const history = createBrowserHistory();

export class AppRoute extends React.Component<AppRouteProps, {}> {

    constructor(props: AppRouteProps) {
        super(props);
    }

    render() {
        let routes;
        if (this.props.Routes != undefined) {
            routes = this.props.Routes.map((route, index) => {
                return (
                    <Route  path={route.path} component={route.component} />
                );
            });
        }

        return (
            <div>
                {routes}
                {/* <Redirect from='*' to='/404' /> */}
            </div>
        );
    }
}