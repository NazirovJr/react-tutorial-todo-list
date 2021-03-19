import React, {useState} from 'react'
import styles from './addToDo.module.css'
import PropTypes from 'prop-types'

function useInputValue(defaultValue ='') {
    const [value,setValue] = useState(defaultValue)
    return {
        bind:{
            value,
            onChange:event => setValue(event.target.value)
        },
        clear:() => setValue(''),
        value:()=> value
    }
}
function AddToDo ({onCreate}) {
    const input = useInputValue('')
    const submitHandler = event => {
        event.preventDefault()
        if (input.value().trim())
        {
            onCreate(input.value())
            input.clear()
        }
    }
    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <input {...input.bind} className={styles.input}/>
            <input type="submit" className={styles.btn}/>
        </form>
    )
}

AddToDo.propTypes = {
    onCreate:PropTypes.func.isRequired
}

export default AddToDo