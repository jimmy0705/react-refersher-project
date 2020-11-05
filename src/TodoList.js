import { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
    constructor(props){
        super(props)
        this.state={todo:[]}
    }
    render() {
        return (
            <div>
                <h1>todo list</h1>
                <ul>
                    <Todo/>
                </ul>
            </div>
        )
    }
}
