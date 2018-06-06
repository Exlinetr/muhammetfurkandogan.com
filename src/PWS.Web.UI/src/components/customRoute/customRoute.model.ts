import { RouteProps } from "react-router-dom";

export interface CustomRouteProps extends RouteProps {
    Layout?: any,
    Page: any
}

export interface AppRouteProps {
    Routes: Array<Route>
}

export interface Route extends RouteProps {

}