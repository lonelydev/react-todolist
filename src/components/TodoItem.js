import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    // /**
    //  * Had this been a regular function and not an arrow function is that 
    //  * reference to this will be undefined in a regular function context. 
    //  * In order to get that explicitly working, you'd have to bind the method 
    //  * to the object using this.markComplete.bind(this).
    //  * that way any references to this will be bound to the properties of this class
    //  * In order to avoid this complexity, we just declare the function as 
    //  * an arrow function instead
    //  * @param {*} event 
    //  */
    // toggleComplete = (event) => {
    //     console.log(this.props)
    // }

    render() {
        const {id, title} = this.props.todo;
        return (
            // inline styles requires double curly braces
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' 
                    onChange={this.props.toggleCompleted.bind(this, id)}/> {' '}
                    {title}
                    <button onClick={this.props.deleteItem.bind(this, id)} 
                    style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    colors: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

// if you want dynamic styles, then you need to create a style function
// that gets evaluated for every object 
export default TodoItem;
