import React from 'react'
import './Modal.css'
import styles from '../ToDo/addToDo.module.css'


export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button className={styles.btn} onClick={() => this.setState({ isOpen: true })}>
                    Open modal
                </button>

                {this.state.isOpen && (
                    <div className='modal'>
                        <div className='modal-body'>
                            <h1>Modal title</h1>
                            <p>I am awesome modal!</p>
                            <button className={styles.btn} onClick={() => this.setState({ isOpen: false })}>
                                Close modal
                            </button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}
