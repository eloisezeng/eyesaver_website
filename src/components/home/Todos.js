import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) =>
        (<TodoItem 
            key={todo.id} 
            todo={todo} 
            postTodo={this.props.postTodo}
            delTodo={this.props.delTodo}
            />)
        )
        /*
        for each todo in todos, return <TodoItem />
        todo is a prop in <TodoItem>
       */
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    postTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default Todos;
