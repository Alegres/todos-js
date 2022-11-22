# Instruction
`npm run backend`
to start **json-server**

`npm start`
to start frontend with **vite**

`npm run sass`
to start sass compiler.

# TODOs
- Implement router to dynamically load content in SPA
    - Two subpages:
        - TODO list
        - Dashboard with welcome message
- Create TodosView.
    - First try to prepare static HTML and CSS representing TODO list with buttons
    - Load data from backend using **fetch** (read in JS documentation)
        - Methods responsible for calling the backend should be extracted to separate service (e.g. todosService.js)
    - Dynamically render all TODOs from backend
    - Create checkboxes which allow to set TODO to **done**
    - When TODO is set to done, it should be possible to remove it
    - User should be also allowed to add new TODOs
    - User should be allowed to order TODOs by name (ascending or descending)
- Additionally try to extract parts of TODOs list to Web Components
