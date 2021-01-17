import React, { Component } from 'react'

export class AddTodoItem extends Component {
    render() {
        return (
            <form style={formStyle}>
                <input type='text' 
                name='title' 
                placeholder='Add todo ...' 
                style={inputTextFieldStyle}/>
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

export default AddTodoItem;
