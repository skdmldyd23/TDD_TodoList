import { render, fireEvent } from "@testing-library/react";
import React from "react";
import TodoApp from "../components/TodoApp";

describe('<TodoApp/>',()=>{
    const todo=[
        {
            id:1,
            text : 'test1',
            done : false
        },
        {
            id:2,
            text : 'test2',
            done : true
        }
    ]

    it('has <TodoForm/> and <TodoList/>',()=>{
        const todoApp = render(<TodoApp/>);
        const submitButton = todoApp.getByText('등록'); // 등록 버튼 TodoForm 안에 있음
        const removeButton = todoApp.getAllByText('삭제')[0]; //등록 버튼 TodoList 안에 TodoItme에 있음
    });

    it('active onInsert',()=>{
        const todoApp = render(<TodoApp/>);
        const submitButton = todoApp.getByText('등록');
        const input = todoApp.getByPlaceholderText('할 일을 입력하세요');
        fireEvent.change(input,{
            target:{
                value : 'test2222'
            }
        });
        fireEvent.click(submitButton);
        
        todoApp.getByText('test2222');

    });

    it('active onToggle',()=>{
        const todoApp = render(<TodoApp/>);
        const span = todoApp.getByText('test');
        fireEvent.click(span);
        expect(span).toHaveStyle('text-decoration : line-through');
    });

    it('active onRemove',()=>{
        const todoApp = render(<TodoApp/>);        
        const removeButton = todoApp.getByText('삭제');
        fireEvent.click(removeButton);
        expect(todoApp.queryByText('삭제')).not.toBeTruthy();
    })

})