import firebaseDB from './firebase';

export const setNewFBData = async (payload) =>{
    firebaseDB.ref('/').set(payload);
    return await getTodos();
}
//READ
export const getTodos = async () => {
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