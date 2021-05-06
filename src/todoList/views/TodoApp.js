import {useState,useEffect} from 'react';
import Header from './../Header';
import AddToDo from './../AddToDo';
import Todos from './../Todos';
import Footer from './../Footer'
import {v4 as uuidv4} from 'uuid';
import { getTodos,createTodo, updateTodo, deleteTodo } from './../../api/todos'
import './../App.css';
 
let defaultTodos=[];
const TodoApp = ({}) => {
    let [todos,setTodos] = useState(defaultTodos);//todoList array
    let [inputValue,setInputValue] = useState('');//input欄位的值 
    
    useEffect(()=>{
        fetchData();
    },[]);  
    
    //RESTFUL Api functions
    //Read Data
    const fetchData = async () => {
        defaultTodos = await getTodos();
        console.log('defaultTodos',defaultTodos)
        setTodos(defaultTodos);
    }
    //新增todo項目
    const handleAddTodo = async() =>{
        if(inputValue.length!== 0){
            try{
                let res;
                if(todos && todos.length > 0){
                    res = await createTodo(
                        [
                            ...todos,
                            {
                                name:inputValue,
                                water_level:100,
                                id:uuidv4(),
                            }
                        ]
                    );
                }else{
                    res = await createTodo([
                        {
                            name:inputValue,
                            water_level:100,
                            id:uuidv4(),
                        }
                    ])
                }
                setTodos(res);
            }catch(e){
                console.log(e);
            }
        }
        setInputValue("")
    }

    //雙向綁定新增工作欄位值
    const handleChange = (e) =>{
        setInputValue(e.target.value);
    }

    //顯示編輯input
    const handleIsDone = (payload,callback) => {
        if(callback){//檢查是否為編輯狀態，如為編輯狀態則關閉編輯狀態
            callback();
        }

        handleSave(payload);
        fetchData();
    }
    
    //刪除todo事項
    const deletTodoItem = async (id) => { 
        let newTodo;
        if(todos && todos.length > 0){
            newTodo = todos.filter(item=>{
                return item.id !== id;
            })
        }else{
            newTodo = [];
        }
        
        let res = await deleteTodo(newTodo);
        setTodos(res);
    }
    
    //開啟關閉edit欄位
    const triggerEditColumn = (id,editStatus) =>{
        setTodos(prevTodos=>
            prevTodos.map(todo => {
                if(todo.id!==id)
                    return todo
                else if(todo.id === id && todo.isDone)
                    return {
                        ...todo,
                        isEdit:editStatus,
                        isDone:false
                    }
                else if(todo.id === id)
                    return {
                        ...todo,
                        isEdit:editStatus
                    }
            })
        );
    }

    //儲存edit變更
    const handleSave = async(payload)=>{
        const {id ,name, isDone} = payload;
        let newTodos = todos.map(item =>{
            if(item.id === id){
                return {
                    id,
                    name,
                }
            }else{
                return item
            }
        })
        let res = await updateTodo(newTodos);
        setTodos(res);
    }

    return (
        <>
            <Header/>
            <AddToDo handleAddTodo={handleAddTodo} inputValue={inputValue} handleChange={handleChange}/>
            <Todos todos={todos} deletTodoItem = {deletTodoItem} handleIsDone={handleIsDone} handleSave={handleSave} triggerEditColumn={triggerEditColumn}/>
            <Footer things = {todos?todos.length:0}/>
        </>
    )
}
export default TodoApp;