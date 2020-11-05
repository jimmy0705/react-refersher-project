import { Component } from 'react'
import Todo from './Todo'
import CreateTodo from "./CreateTodo"

export default class TodoList extends Component {
    constructor(props){
        super(props)
        this.state={todos:
            [{task:"practice mac Mojave edition "},{task:"Practice and understand developer workflow in MacBook terminal and all"},{task:"Setup react and react native environment"},{task:"practice and refresh react simple to do project"},{task:"implement redux into this todo project to under redux"}
        ]}

        this.handlerCreate= this.handlerCreate.bind(this)
    }

    handlerCreate(newTodo){
        console.log(newTodo)
        console.log(this.state.todos)
        this.setState({
           todos:[...this.state.todos,newTodo]
        })
    }
    render() {
        return (
            <div>
                <h1>todo list</h1>
                <CreateTodo create={this.handlerCreate} />

                <ul>
                   {this.state.todos.map((todo,index)=><Todo todo={todo.task} key={index}/>)}
                </ul>
            </div>
        )
    }
}
