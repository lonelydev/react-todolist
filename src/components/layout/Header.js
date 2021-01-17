import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1>Todo List</h1>                
            </header>
        )
    }
}

const headerStyle = {
    background: '#333',
    color:'#fff',
    textAlign: 'center',
    padding: '5px'
}
export default Header;