import * as React from 'react';
import {  Router, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Layout } from './components/layout';
// import * as routes from "./route";
// import { AppRoute } from "./components/customRoute";
import { BlogListPage, NotFoundPage, BlogDetailPage } from './pages';
import { BrowserRouter } from 'react-router-dom';
const history = createBrowserHistory();


export class App extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/blog/:title" component={BlogDetailPage} />
                        <Route path="/blog" component={BlogListPage} />
                        <Route path="/" component={BlogListPage} />
                        <Route component={NotFoundPage} />
                        {/* <AppRoute Routes={routes.default} /> */}
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}