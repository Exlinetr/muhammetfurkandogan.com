import * as React from "react"
import { Route, Switch, RouteProps } from "react-router-dom"
import { CustomRouteProps } from "./customRoute.model";
import { Layout } from "../layout";

export class CustomRoute extends React.Component<CustomRouteProps, {}>{

    constructor(props: any) {
        super(props);
    }

    render() {

        console.log(this.props);
        return (
            <Route {...this.props}>
                <Layout>
                    {this.props.Page}
                </Layout>
            </Route>
        );
    }
}
// export const CustomRoute = ({ component: Component, layout: Layout, ...rest }) => (
//     <Route {...rest} render={props => (
//         <Layout>
//             <Component {...props} />
//         </Layout>
//     )} />
// );