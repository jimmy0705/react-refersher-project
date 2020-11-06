
import { Route, BrowserRouter } from 'react-router-dom'
import TodoList from './TodoList'
import Nav from './Navbar'
import Random from './Random'

function App() {
  return (
     
    <BrowserRouter>
        <div className="App">
        <Nav/>
          <Route exact path='/' component={TodoList}/>
          <Route path='/random' component={Random} />
         
        </div>
      </BrowserRouter>


  );
}

export default App;
