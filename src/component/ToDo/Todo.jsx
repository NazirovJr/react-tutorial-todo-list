import React from 'react'
import PropTypes from 'prop-types'
import ToDoItems from "./ToDoItems";
function ToDo(props) {
    return (
        <div className="container">
            <ul style={{
                listStyle: 'none', margin: 0, padding: 0}}>
                {props.todos.map((todo, index) => {
                    return <ToDoItems todo={todo} index={index} onChange={props.onToggle} key={todo.id}/>
                })}
            </ul>
        </div>
    )
}

ToDo.propTypes = {
    todos:PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle:PropTypes.func.isRequired
}

export default ToDo