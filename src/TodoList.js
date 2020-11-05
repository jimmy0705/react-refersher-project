import { Component } from 'react'
import Todo from './Todo'
import CreateTodo from "./CreateTodo"

export default class TodoList extends Component {
    constructor(props){
        super(props)
        this.state={todos:[]}

        this.handlerCreate= this.handlerCreate.bind(this)
        this.handlerRemove= this.handlerRemove.bind(this)
    }

    handlerRemove(id){
       console.log(id)
       this.setState({
           todos: this.state.todos.filter((t,index)=> index != id)
       })
    }

    handlerCreate(newTodo){
        console.log(newTodo)
        console.log(this.state.todos)
        this.setState({
           todos:[...this.state.todos,newTodo]
        })
    }
    render() {
     //conditional rendering
        // if (this.state.todos.length < 1) {
        //     return <h3>please add your todos </h3>
        //   }
       
        return (
            <div>
                <h1>todo list</h1>
                <CreateTodo create={this.handlerCreate} />
               {this.state.todos.length<1 ? <h3>please add your todos </h3> :  <ul>
                   {this.state.todos.map((todo,index)=><Todo todo={todo.task} key={index} id={index} delete={this.handlerRemove}/>)}
                </ul>}
                {/* <ul>
                   {this.state.todos.map((todo,index)=><Todo todo={todo.task} key={index} id={index} delete={this.handlerRemove}/>)}
                </ul> */}
            </div>
        )
    }
}
