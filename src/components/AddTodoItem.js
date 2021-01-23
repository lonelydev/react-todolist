import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class AddTodoItem extends Component {
    state = {
        title: ''
    };

    onChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        );
    };

    onSubmit = (e) => {
        // this cancels the default action that belongs to the event. 
        // in this case, the default behaviour is form submit.
        // more here: https://www.w3schools.com/jsref/event_preventdefault.asp
        e.preventDefault();
        this.props.addTodoItem(this.state.title);
        this.setState({title: ''});
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}
            style={formStyle}>
                <input type='text' 
                name='title' 
                placeholder='Add todo ...' 
                style={inputTextFieldStyle}
                value={this.state.title}
                onChange={this.onChange}/>
                <input type='submit'
                value='Submit'
                className='btn'
                style={submitButtonStyle} />
            </form>
        )
    }
}

const formStyle = {
    display: 'flex'
};

const inputTextFieldStyle = {flex: '10', padding: '5px'};

const submitButtonStyle = {flex: '1'};

AddTodoItem.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodoItem;
