const baseURL = 'https://gist.githubusercontent.com/May27Oliver/e66c7238287b391d4f07bb578e72bd9a/raw/0a55d0d63e0b2b11381f96da1266a03e673ffff6/todoList.json';

//READ
export const getTodos = async () => {
    let res = await fetch(baseURL,{});
    let data = await res.json();
    return data.info;
}
//CREATE
export const createTodo = async (payload) => {
    const { title, isDone } = payload;
    const res = await fetch(`${baseURL}/todos/ `, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Facebook-Client-Token': localStorage.getItem('facebookClientToken'),
        },
        body: JSON.stringify({
            title,
            isDone
        })
    });
    return await res.json();
}

//DELETE
export const deleteTodo = async (id) => {
    const res = await fetch(`${baseURL}/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Facebook-Client-Token': localStorage.getItem('facebookClientToken'),
        }
    })

    return res.json();
}

// UPDATE
export const updateTodo = async (payload) => {
    const { id, title, isDone } = payload;
    const res = await fetch(`${baseURL}/todos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Facebook-Client-Token': localStorage.getItem('facebookClientToken')
        },
        body: JSON.stringify({
            title,
            isDone
        })
    })
    return res.json();
}