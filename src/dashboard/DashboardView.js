import { AbstractView } from "../view/AbstractView";

export class DashboardView extends AbstractView {
    constructor() {
        super();
    }

    getHTML() {
        return "<h1>Hello world!</h1>";
    }
}