import React, { Component } from 'react';
import TodoForm from "./TodoForm";
import TodoList from './TodoList';

class TodoApp extends Component {

    nextId = 2;
    state={
        todos : [
            {
                id:1,
                text:'test',
                done:false
            }
        ]
    }

    onInsert=(text)=>{
        const todo = {
            id: this.nextId++,
            text : text,
            done : false,
        }

        this.setState({
            todos : this.state.todos.concat(todo),
        })
        
    }

    onToggle = (id)=>{
        const { todos }=this.state;
        todos.forEach((todo,index)=>{
            if(todo.id === id){
                const toggleTodo = {
                    ...todo,
                    done : !(todo.done)
                }
                this.setState({
                    todos : [
                        ...todos.slice(0,index),
                        toggleTodo,
                        ...todos.slice(index+1,todos.length)
                    ]
                })
                return;               
            }
        })
    }

    onRemove = (id)=>{
        const {todos} = this.state;
        todos.forEach((todo,index)=>{
            if(todo.id === id){
                this.setState({
                    todos : [
                        ...todos.slice(0,index),
                        ...todos.slice(index+1,todos.length)
                    ]
                })
                return;
            }
        })
    }

    render() {
        const { todos } = this.state;
        return (
            <div>
                <TodoForm onInsert={this.onInsert}/>

                <TodoList todos={todos} onToggle={this.onToggle} onRemove={this.onRemove}/>
            </div>
        );
    }
}

export default TodoApp;