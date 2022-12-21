import { getRoutes } from "./routes";

const navigateTo = (url) => {
    history.pushState(null, null, url);
    route();
}

export async function route() {
    const routes = getRoutes();

    const routesMatching = routes.map(route => {
        return {
            route: route,
            isMatching: location.pathname === route.path
        }
    });

    let matchedRoute = routesMatching.find(route => route.isMatching === true);

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

window.addEventListener("popstate", route);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    route();
})