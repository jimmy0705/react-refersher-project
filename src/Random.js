import { Component } from 'react'


export default class Random extends Component {
    constructor(props){
        super(props)
        setTimeout(() => {
        props.history.push('/')
        }, 3000);
    }

   

 
    render() {
     //conditional rendering
        // if (this.state.todos.length < 1) {
        //     return <h3>please add your todos </h3>
        //   }
       
        return (
            <div>
               <h1>random page is here .....</h1>
               <h3>you will be redirect to ur todo page in 3 seconds :)</h3>
            </div>
        )
    }
}
