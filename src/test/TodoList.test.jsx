import {render, fireEvent} from "@testing-library/react";
import React from "react";

import TodoList from "../components/TodoList";

describe('<TodoList/>',()=>{
    
    const todos=[
        {
            id:1,
            text:'test1',
            done:false
        },
        {
            id:2,
            text:'test2',
            done:true
        }
    ]

    it('has TodoItem',()=>{
        const todoList = render(<TodoList todos={todos}/>);
        const span1 = todoList.getByText(todos[0].text);
        const span2 = todoList.getByText(todos[1].text);
    });

    it('call onToggle',()=>{
        const onToggle = jest.fn();
        const todoList = render(<TodoList todos={todos} onToggle={onToggle}/>);
        const span = todoList.getByText(todos[0].text);
        fireEvent.click(span);
        expect(onToggle).toBeCalledWith(todos[0].id);
    });

    it('call onRemove',()=>{
        const onRemove = jest.fn();
        const todoList = render(<TodoList todos={todos} onRemove={onRemove}/>);
        let button = todoList.getAllByText('삭제')[0];
        fireEvent.click(button);
        expect(onRemove).toBeCalledWith(todos[0].id);

        button = todoList.getAllByText('삭제')[1];
        fireEvent.click(button);
        expect(onRemove).toBeCalledWith(todos[1].id);

    });
})