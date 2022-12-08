import { getRoutes } from "./routes";

export async function route() {
    const routes = getRoutes();

    const routesMatching = routes.map(route => {
        return {
            route: route,
            isMatching: location.pathname === route.path
        }
    });

    let matchedRoute = routesMatching.find(route => route.isMatching === true);

    console.log(matchedRoute);

    if (!matchedRoute) {
        matchedRoute = {
            route: routes[0],
            isMatching: true
        }
    }

    const view = new matchedRoute.route.view();
    document.querySelector("#app").innerHTML = view.getHTML();
    await view.loadModel();
    view.renderContent();

}
route();