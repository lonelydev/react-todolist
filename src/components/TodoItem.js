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
        const toggleCompleted = this.props.toggleCompleted
        return (
            // inline styles requires double curly braces
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' 
                    onChange={toggleCompleted.bind(this, id)}/> {' '}
                    {title}
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.array.isRequired
}

// if using an object as a style, you can replace the double curly braces where
// it is being referenced with a single pair of curlies.
const itemStyle = {
    backgroundColor: '#f4f4f4'
}

// if you want dynamic styles, then you need to create a style function
// that gets evaluated for every object 
export default TodoItem;
