import { Component } from 'react'

export default class Todo extends Component {
   
    render() {
        return (
            <div>
             <button>edit</button>
             <button>delete</button>      
            <li>{this.props.todo}</li>
            
            
            </div>
        )
    }
}
