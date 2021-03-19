import './App.css';
import React from 'react';
import {useEffect, useState} from "react";
import ToDo from "./component/ToDo/Todo";
import Loader from "./component/Loader/Loader";
import Context from "./context";
import Modal from "./component/Modal/Modal";

const AddToDo = React.lazy(
    () =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve(import('./component/ToDo/addToDo.jsx'))
            }, 3000)
        })
)

function App() {
    const [todos, setTodos] = useState([])
    const [isloading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                }, 2000)
            })
    }, [])
    const onToggle = (id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function removeToDo(id) {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }

    function addToDo(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }

    return (
        <Context.Provider value={{removeToDo}}>
            <div className="wrapper">
                <h1>ToDos List</h1>
                <Modal/>
                <React.Suspense fallback={<Loader/>}>
                    <AddToDo onCreate={addToDo}/>
                </React.Suspense>
                {isloading && <Loader/>}
                {todos.length ? <ToDo todos={todos} onToggle={onToggle}/>
                    : isloading ? null : <p>No ToDos</p>}
            </div>
        </Context.Provider>
    );
}

export default App;
