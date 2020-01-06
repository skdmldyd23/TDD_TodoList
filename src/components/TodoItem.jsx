import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const {id,text,done} = this.props.todo;
        const { onToggle, onRemove } = this.props;
        return (
           <li>
               <span 
                style={{textDecoration : done? 'line-through' : 'none'}}
                onClick={()=>{onToggle(id)}}
               >{text}</span>
               <button onClick={()=>{onRemove(id)}}>삭제</button>
           </li>
        );
    }
}

export default TodoItem;