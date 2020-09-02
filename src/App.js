import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/home/Todos';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import Settings from './components/pages/Settings';
import SettingsHeader from './components/pages/SettingsHeader';
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
            mode: "default",
            vid_length: ""
          },
          {
            id: uuid(),
            title: "Normal",
            position: "6",
            mode: "default",
            vid_length: ""
          },
          {
            id: uuid(),
            title: "Distraction",
            position: "7",
            mode: "distracted",
            vid_length: "7"
          },
          {
            id: uuid(),
            title: "Thumbsup",
            position: "thumbsup",
            mode: "thumbsup",
            vid_length: ""
          },
          {
            id: uuid(),
            title: "Clapping",
            position: "clapping",
            mode: "clapping",
            vid_length: ""
          },
        ],
        settings: [
        {
          id: uuid(),
          name: "ip",
          x: "", 
          y: "",
          label: "IP Address",
          img: "",
          type: "input",
          
        },
        {
          id: uuid(),
          name: "computer",
          x: "", 
          y: "", // pixels included
          label: "Computer",
          img: "",
          type: "options",
          
        },
        {
          id: uuid(),
          name: "click_arrow_to_right_stop_vid",
          x: "", 
          y: "", // pixels included
          label: "Arrow to the right of Stop Video",
          img: "button_next_to_stop_vid",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "click_vb_settings",
          x: "", 
          y: "", // pixels included
          label: "Open Virtual Settings",
          img: "vb_settings",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "click_exit_settings",
          x: "", 
          y: "", // pixels included
          label: "Exit Settings",
          img: "exit_settings",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "0",
          x: "", 
          y: "", // pixels included
          label: "Position 0",
          img: "vb_positions",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "1",
          x: "", 
          y: "", // pixels included
          label: "Position 1",
          img: "",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "2",
          x: "", 
          y: "", // pixels included
          label: "Position 2",
          img: "",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "3",
          x: "", 
          y: "", // pixels included
          label: "Position 3",
          img: "",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "4",
          x: "", 
          y: "", // pixels included
          label: "Position 4",
          img: "",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "5",
          x: "", 
          y: "", // pixels included
          label: "Position 5",
          img: "",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "6",
          x: "", 
          y: "", // pixels included
          label: "Position 6",
          img: "",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "7",
          x: "", 
          y: "", // pixels included
          label: "Position 7",
          img: "",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "8",
          x: "", 
          y: "", // pixels included
          label: "Position 8",
          img: "",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "9",
          x: "", 
          y: "", // pixels included
          label: "Position 9",
          img: "",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "10",
          x: "", 
          y: "", // pixels included
          label: "Position 10",
          img: "",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "11",
          x: "", 
          y: "", // pixels included
          label: "Position 11",
          img: "",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "click_reactions",
          x: "", 
          y: "", // pixels included
          label: "Reactions",
          img: "reactions",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "click_thumbsup",
          x: "", 
          y: "", // pixels included
          label: "Thumbsup",
          img: "clapping-thumbsup",
          type: "pixels",
          
        },
        {
          id: uuid(),
          name: "click_clapping",
          x: "", 
          y: "", // pixels included
          label: "Clapping",
          img: "",
          type: "pixels",
          
        },
        ]
  }

  // post Todo
  postButton = (position, mode, vid_length) => {
    console.log({position, mode, vid_length})
    axios.post('http://0.0.0.0:5000/posts', 
    {position, mode, vid_length})
    .then(console.log("Success!"))
    .catch(error => "Authorization failed: " + error.message)
  }

  // delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
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
  }

  saveSetting = (name, x, y) => {
    console.log(name, x, y, "you called save settings")
    this.setState({ settings: this.state.settings.map((setting) => {
    if(setting.name === name) {
      setting.x = x
      setting.y = y
    }
    return setting
    })})
  }

  // useful later
  // toggleImg = (id) => {
  //   this.setState({ settings: this.state.settings.map((setting) => {
  //     if(setting.id === id) {
  //       setting.show_img = !setting.show_img
  //     }
  //     console.log(setting.show_img)
  //     return setting
  //   })})
  // }
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
                    <Todos 
                    todos={this.state.todos}
                    postButton={this.postButton}
                    delTodo={this.delTodo}
                    />
                  </React.Fragment>
                  )} />
                <Route path="/About" component={About} /> 
                <Route path="/Settings" render={props => (
                  <React.Fragment>
                    <SettingsHeader />
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
