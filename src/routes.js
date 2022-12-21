import { DashboardView } from "./dashboard/DashboardView.js";
import { TodosView } from "./todos/TodosView.js";

export const getRoutes = () => {
        const routes = [
            { path: "/", view: DashboardView },
            { path: "/todos", view: TodosView }
        ];
        return routes;
}