import { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
    constructor(props){
        super(props)
        this.state={todos:
            [{task:"practice mac Mojave edition "},{task:"Practice and understand developer workflow in MacBook terminal and all"},{task:"Setup react and react native environment"},{task:"practice and refresh react simple to do project"},{task:"implement redux into this todo project to under redux"}
        ]}
    }
    render() {
        return (
            <div>
                <h1>todo list</h1>
                <ul>
                   {this.state.todos.map(todo=><Todo todo={todo.task}/>)}
                </ul>
            </div>
        )
    }
}
