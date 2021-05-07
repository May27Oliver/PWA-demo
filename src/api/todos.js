import firebaseDB from './firebase';
let baseURL="https://gist.githubusercontent.com/May27Oliver/e66c7238287b391d4f07bb578e72bd9a/raw/df1d1647e2b8f410fd47cf09187eab30543ff65d/todoList.json";

export const setNewFBData = async (payload) =>{
    let data = await fetch(baseURL)
    console.log('data',data);
    firebaseDB.ref('/').set(payload);
    return await getTodos();
}
//READ
export const getTodos = async () => {
    let rowData = await fetch(baseURL)
    let data = await rowData.json();
    console.log('data',data);
    let dataFromFB = await (await firebaseDB.ref('/').once('value')).val();
    return dataFromFB;
}
//CREATE
export const createTodo = async (payload) => {
    return setNewFBData(payload);
}

//DELETE
export const deleteTodo = async (payload) => {
    return setNewFBData(payload);
}

// UPDATE
export const updateTodo = async (payload) => {
    return setNewFBData(payload);
}