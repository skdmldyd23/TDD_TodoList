import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props; 
        return (
            <ul>
                {todos.map((v,k)=>{
                    return <TodoItem 
                                key={k} 
                                todo={v}
                                onToggle={onToggle}
                                onRemove={onRemove}    
                            />
                })}
            </ul>
        );
    }
}

export default TodoList;