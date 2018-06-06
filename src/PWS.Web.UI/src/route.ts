import { BlogListPage, BlogDetailPage, NotFoundPage } from './pages';

const _routes = [];

_routes.push({
    path: "/",
    component: BlogListPage
});

_routes.push({
    path: "/blog",
    component: BlogListPage
});

_routes.push({
    path: "/blog/{title}--{id}",
    component: BlogDetailPage
});

_routes.push({
    path: "/404",
    component: NotFoundPage
});

export default _routes;