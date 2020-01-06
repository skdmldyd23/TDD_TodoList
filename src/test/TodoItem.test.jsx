import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import TodoItem from "../components/TodoItem";



describe('<TodoItem/>',()=>{
    const sample={
        id:1,
        text : 'test',
        done : true
    }
    const sample2={
        id:2,
        text : 'test222',
        done : false
    }

    it('has span and button',()=>{
        const todoItem = render(<TodoItem todo={sample}/>)
        // expect(todoItem.container).toMatchSnapshot();
        const span = todoItem.getByText(sample.text);
        const button = todoItem.getByText('삭제');
    });

    it('change css',()=>{
        let todoItem = render(<TodoItem todo={sample}/>);
        let span = todoItem.getByText(sample.text);
        expect(span).toHaveStyle('text-decoration : line-through');

        cleanup(); //위에서 그려놓은 dom 지움
    
        todoItem = render(<TodoItem todo={sample2}/>);
        span = todoItem.getByText(sample2.text);
        expect(span).not.toHaveStyle('text-decoration : line-through');
    });

    it('call onToggle when click span',()=>{
        const onToggle = jest.fn();
        const todoItem = render(<TodoItem todo={sample} onToggle={onToggle}/>);
        const span = todoItem.getByText(sample.text);
        fireEvent.click(span);
        expect(onToggle).toBeCalledWith(sample.id);
    });

    it('call onRemove when click button',()=>{
        const onRemove = jest.fn();
        const todoItem = render(<TodoItem todo={sample} onRemove={onRemove}/>);
        const button = todoItem.getByText('삭제');
        fireEvent.click(button);
        expect(onRemove).toBeCalledWith(sample.id);
    });

    
})