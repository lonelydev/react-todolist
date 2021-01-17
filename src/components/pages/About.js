import React from 'react'

export default function About() {
    return (
        // when you don't really need an element to be returned, 
        // then you can return a react.fragment.
        <React.Fragment>
            <h1>About</h1>
            <p>This is a TodoList app v1.0.0. 
                Done as part of a tutorial.</p>
        </React.Fragment>
    )
}
