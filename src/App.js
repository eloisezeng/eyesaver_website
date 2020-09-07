import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/home/Todos';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Connected from './components/layout/Connected'; // gives connected message
import About from './components/pages/About';
import Settings from './components/pages/Settings';
import SettingsHeader from './components/pages/SettingsHeader';
import AddTodo from './components/home/AddTodo';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import ls from 'local-storage'
import './App.css';
import { Redirect } from 'react-router-dom'

class App extends Component {

  state = {
    todos: [],
    config_settings: 
      {
        id: uuid(),
        ip: ls.get('ip') || "", // retrieve client-side storage and set as state
        computer: ls.get('computer') || "",
      },
    settings: [],
    connected: false,
  }

  saveConfigSetting = (ip, computer) => {
    console.log(ip, computer)
    this.setState( {config_settings: {ip: ip, computer: computer}}, () => {
    console.log(this.state.config_settings)})
    ls.set('ip', ip) // store ip locally
    ls.set('computer', computer)
  }
  // get todos and pixelsettings
  componentDidMount() {
    console.log(this.state.config_settings)
    const url = 'http://' + this.state.config_settings.ip + ':61405' // make url
    axios.get(url + '/buttons') // get user's buttons
      .then(res => {
        const todos = res.data;
        this.setState({ todos });
        this.setState({ connected: true });
        console.log(this.state.connected)
      })
      .catch(error => {
        console.log("Server is down", error)})
    axios.get(url + '/pixelsettings') // get user's pixelsettings
    .then(res => {
      const settings = res.data;
      this.setState({ settings });
    })
    .catch(error => console.log("Server is down", error))}

  saveSetting = (id, x, y) => {
    const url = 'http://' + this.state.config_settings.ip + ':61405' // make url
    axios.post(url + '/pixelsettings', 
    {id, x, y})
    .then(console.log("Success!"))
    .catch(error => "Authorization failed: " + error.message)
    this.setState({ settings: this.state.settings.map((setting) => {
    if(setting.id === id) {
      setting.x = x
      setting.y = y
    }
    return setting
    })})
  }

  setPixels = (id) => {
    console.log("set pixels")
  }
  postButton = (position, mode, vid_length) => {
    console.log({position, mode, vid_length})
    const url = 'http://' + this.state.config_settings.ip + ':61405'
    console.log(url) 
    axios.post(url + "/posts",
    {position, mode, vid_length})
    .then(console.log("Success!"))
    .catch(error => "Authorization failed: " + error.message)
  }

  // delete Todo
  delTodo = (id) => {
    console.log("deleting")
    const url = 'http://' + this.state.config_settings.ip + ':61405'
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    axios.delete(url + '/buttons/' + id)
    .then(console.log(id, "Deleted button"))
    .catch(error => "Authorization failed: " + error.message)
  }

  // Add Todo
  addTodo = (title, position, mode, vid_length) => {
    const url = 'http://' + this.state.config_settings.ip + ':61405'
    const newTodo = {
      id: uuid(), 
      title,
      position,
      mode,
      vid_length,
    }
    // append newTodo to todos
    this.setState({ todos: [...this.state.todos, newTodo]})
    axios.post(url + '/buttons', 
    {id: newTodo["id"], title, position, mode, vid_length})
    .then(console.log(newTodo["id"], "Success!"))
    .catch(error => "Authorization failed: " + error.message)
  }

  render(){
    return (
      <Router>
        <div className="App">
          <link href='http://fonts.googleapis.com/css?family=Alegreya Sans' rel='stylesheet'></link>
            <div className="container">
            <React.Fragment>
              <Header/>
            </React.Fragment>
            <Route path="/connect" render={props => (
              // this.state.connected ? <Redirect to="/home" /> : <Redirect to="/connect" />
            <React.Fragment>
              {this.state.connected ? <Redirect to="/home" /> : <Redirect to="/connect" />}
              <Connected
                config_settings={this.state.config_settings}
                saveConfigSetting={this.saveConfigSetting}
                />
              </React.Fragment> // if app is connected to server, direct qr code page to home
            )}/>
                <Route path="/home" render={props => (
                  <React.Fragment>
                    <Todos 
                    todos={this.state.todos}
                    postButton={this.postButton}
                    delTodo={this.delTodo}
                    />
                    <AddTodo 
                      addTodo={this.addTodo}
                    />
                    {this.state.connected ? <Redirect to="/home" /> : <Redirect to="/connect" />}
                  </React.Fragment>
                  )} />
                <Route path="/About" render={props => (
                  <React.Fragment>
                    <About />
                  {this.state.connected ? <Redirect to="/about" /> : <Redirect to="/connect" />}
                  </React.Fragment>
                )}/>
                <Route path="/Settings" render={props => (
                  <React.Fragment>
                    <SettingsHeader />
                    <Settings
                    settings={this.state.settings}
                    saveSetting={this.saveSetting}
                    postButton={this.postButton}
                    setPixels={this.setPixels}
                    />
                    {this.state.connected ? <Redirect to="/settings" /> : <Redirect to="/connect" />}
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
