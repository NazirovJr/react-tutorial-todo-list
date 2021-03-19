import React, {useContext} from 'react'
import Context from "../../context";
import PropTypes from 'prop-types'
const styles = {
    btn:{
    background: 'red',
    borderRadius: '50%',
    color: '#fff',
    border: 'none'
    },
    li:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input:{
        marginRight:'1rem',
    }
}
const ToDoItems = ({todo, index,onChange}) => {
    const {removeToDo} = useContext(Context)
    let cls = []
    if (todo.completed)
        cls.push('done')
    return(
        <li style={styles.li}>
            <span className={cls.join(' ')}>
                <input style={styles.input} type="checkbox"
                 onChange={() => onChange(todo.id)}
                checked={todo.completed}/>
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button style={styles.btn} onClick={removeToDo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

ToDoItems.propTypes = {
    todo:PropTypes.object.isRequired,
    index:PropTypes.number,
    onChange:PropTypes.func.isRequired
}

export default  ToDoItems