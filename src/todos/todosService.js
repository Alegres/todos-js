
//all methods communicating with backend
export async function getTodos(){
    return fetch("http://localhost:3000/todos")
    .then((response) => response.json())
    .then((data) => {
        return data;
    });
}

export async function updateTodo(todo) {
    const body = JSON.stringify(todo);

    const parameters = {
        body,
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
    };

    return fetch("http://localhost:3000/todos/" + todo.id, parameters).then((response) => {
        return response.json();
    });
}