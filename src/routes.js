import { TodosView } from "./todos/TodosView.js";

export const getRoutes = () => {
        const routes = [
            { path: "/TodosView", view: TodosView },
        ];
        return routes;
}