import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/home/Todos';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import ConfigSettings from './components/pages/ConfigSettings';
import Settings from './components/pages/Settings';
import SettingsHeader from './components/pages/SettingsHeader';
import AddTodo from './components/home/AddTodo';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    todos: [],
    config_settings: [
      {
        id: uuid(),
        name: "ip",
        value: "",
      },
      {
        id: uuid(),
        name: "computer",
        value: "",
      },
    ],
    settings: []
  }
  
  // get todos and pixelsettings
  componentDidMount() {
    axios.get(`http://192.168.1.8:61405/buttons`)
      .then(res => {
        const todos = res.data;
        this.setState({ todos });
      })
      .catch(error => console.log("Server is down", error))
      axios.get(`http://192.168.1.8:61405/pixelsettings`)
      .then(res => {
        const settings = res.data;
        this.setState({ settings });
      })
      .catch(error => console.log("Server is down", error))
  }

  postButton = (position, mode, vid_length) => {
    console.log({position, mode, vid_length})
    axios.post('http://192.168.1.8:61405/posts', 
    {position, mode, vid_length})
    .then(console.log("Success!"))
    .catch(error => "Authorization failed: " + error.message)
  }

  // delete Todo
  delTodo = (id) => {
    console.log(id)
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    axios.delete('http://192.168.1.8:61405/buttons/' + id)
    .then(console.log(id, "Deleted button"))
    .catch(error => "Authorization failed: " + error.message)
  }

  // Add Todo
  addTodo = (title, position, mode, vid_length) => {
    const newTodo = {
      id: uuid(), 
      title,
      position,
      mode,
      vid_length,
    }
    // append newTodo to todos
    this.setState({ todos: [...this.state.todos, newTodo]})
    axios.post('http://192.168.1.8:61405/buttons', 
    {id: newTodo["id"], title, position, mode, vid_length})
    .then(console.log(newTodo["id"], "Success!"))
    .catch(error => "Authorization failed: " + error.message)
  }

  saveSetting = (id, x, y) => {
    axios.post('http://192.168.1.8:61405/pixelsettings', 
    {id, x, y})
    .then(console.log("Success!"))
    .catch(error => "Authorization failed: " + error.message)
    
    console.log(id, x, y, "you called save settings")
    this.setState({ settings: this.state.settings.map((setting) => {
    if(setting.id === id) {
      setting.x = x
      setting.y = y
    }
    return setting
    })})
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
                    <Todos 
                    todos={this.state.todos}
                    postButton={this.postButton}
                    delTodo={this.delTodo}
                    />
                    <AddTodo 
                      addTodo={this.addTodo}
                    />
                  </React.Fragment>
                  )} />
                <Route path="/About" component={About} /> 
                <Route path="/Settings" render={props => (
                  <React.Fragment>
                    <SettingsHeader />
                    <ConfigSettings />
                    <Settings
                    settings={this.state.settings}
                    saveSetting={this.saveSetting}
                    postButton={this.postButton}
                    />
                  </React.Fragment>
                )} />
            </div>
            <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
