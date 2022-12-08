
//all methods communicating with backend
export async function getTodos(){
    return fetch("http://localhost:3000/todos")
    .then((response) => response.json())
    .then((data) => {
        return data;
    });
}