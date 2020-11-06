import { Component } from 'react'

import './common.css'

export default class Todo extends Component {

     handleId =(e)=>{
       // console.log(e)
       e.preventDefault()
       // console.log(this.props.delete)
         this.props.delete(this.props.id)
    }
 
    render() {

      

        return (
            <div className="todo-li">
             <button>edit</button>
             <button onClick={this.handleId}>delete</button>      
            <li>{this.props.todo}</li>
            
            
            </div>
        )
    }
}
