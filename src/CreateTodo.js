import { Component } from 'react'

export default class CreateTodo extends Component {

    constructor(props){
        super(props)
        this.state={task:""}
        this.handerChange = this.handerChange.bind(this)
        this.handerSubmit = this.handerSubmit.bind(this)
    }

    handerChange(e){
       // console.log(e.target.value)
        this.setState(
            {
                task:e.target.value
            }
        )
    }

    handerSubmit(e){
        e.preventDefault()
       // alert(" ad todo submit button clicked")
       console.log(this.state.task)
      // console.log(this.props.create)
       this.props.create(this.state)
       this.setState({
           task:""
       })

    }
   
    render() {
        return (
            <div>
             <form onSubmit={this.handerSubmit}>
                 <label>New Todo</label>
                 <input 
                 type="text" 
                 name="task"
                 placeholder="Add todo here..."
                 value={this.state.task}
                 onChange={this.handerChange}
                 required
                 />

                 <button>Add</button>

             </form>
            
            
            </div>
        )
    }
}
