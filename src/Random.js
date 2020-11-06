import { Component } from 'react'
import Todo from './Todo'
import CreateTodo from "./CreateTodo"

export default class Random extends Component {
    constructor(props){
        super(props)
       
    }

 
    render() {
     //conditional rendering
        // if (this.state.todos.length < 1) {
        //     return <h3>please add your todos </h3>
        //   }
       
        return (
            <div>
               <h1>random page is here .....</h1>
            </div>
        )
    }
}
