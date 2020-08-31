import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/home/Todos';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import Settings from './components/pages/Settings';
import AddTodo from './components/home/AddTodo';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import './App.css';
class App extends Component {

  state = {
        todos: [
          {
            id: uuid(),
            title: "None",
            position: "0",
            mode: "default"
          },
          {
            id: uuid(),
            title: "Normal",
            position: "6",
            mode: "default"
          },
          {
            id: uuid(),
            title: "Distraction",
            position: "7",
            mode: "distracted"
          },
          {
            id: uuid(),
            title: "Thumbsup",
            position: "thumbsup",
            mode: "thumbsup",
          },
          {
            id: uuid(),
            title: "Clapping",
            position: "clapping",
            mode: "clapping",
          },
        ],
  }
  // post Todo
  postTodo = (position, mode) => {
    console.log({position, mode})
    axios.post('http://0.0.0.0:5000/posts', 
    {position, mode})
    .then(console.log("Success!"))
    .catch(error => "Authorization failed: " + error.message)
  }
  // delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  // Add Todo
  addTodo = (title, position, mode) => {
    const newTodo = {
      id: uuid(), 
      title,
      position,
      mode,
    }
    // append newTodo to todos
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render(){
    return (
      <Router>
        <div className="App">
          <link href='https://fonts.googleapis.com/css?family=Alegreya Sans' rel='stylesheet'></link>
            <div className="container">
              <Header />
                <Route exact path="/" render={props => (
                  <React.Fragment>
                    <AddTodo 
                    addTodo={this.addTodo}
                    />
                    <Todos todos={this.state.todos}
                    postTodo={this.postTodo}
                    delTodo={this.delTodo}
                    />
                  </React.Fragment>
                  )} />
                <Route path="/About" component={About} /> 
                <Route path="/Settings" component={Settings} /> 
                {/* <Route path="/Settings" render={props => (
                  <React.Fragment>
                    <Settings/>
                  </React.Fragment>
                )} /> */}
            </div>
            <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
