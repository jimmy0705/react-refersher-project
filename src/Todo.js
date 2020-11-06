import { Component } from 'react'
import { connect } from 'react-redux'

import './common.css'

class Todo extends Component {
     handleId =(e)=>{
       // console.log(e)
       e.preventDefault()
       
        this.props.deleteTodo(this.props.id)
        // this.props.delete(this.props.id)
        //this.props.deleteTodo(this.props.id);
    }
 
    render() {

      console.log(this.props)

        return (
            <div className="todo-li">
             {/* <button>edit</button> */}
             <button onClick={this.handleId}>delete</button>      
            <li>{this.props.todo}</li>
            
            
            </div>
        )
    }
    
}




const mapDispatchToProps = (dispatch) => {
    return {
      deleteTodo:id => dispatch({type: 'DELETE_TODO', id: id})
    }
  }


  export default connect(null,mapDispatchToProps)(Todo)