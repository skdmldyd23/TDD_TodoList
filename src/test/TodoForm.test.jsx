import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "../components/TodoForm";


describe('<TodoForm/>',()=>{

    it('has input and button',()=>{
        const todoForm = render(<TodoForm/>);
        const input = todoForm.getByPlaceholderText('할 일을 입력하세요');
        const button = todoForm.getByText('등록');
    });

    it('change input',()=>{
        const todoForm = render(<TodoForm/>);
        const input = todoForm.getByPlaceholderText('할 일을 입력하세요');
        //입력
        fireEvent.change(input,{
            target:{
                value:'test'
            }
        });
        expect(input).toHaveAttribute('value','test');
    });

    it('call onInsert and clear input',()=>{
        const onInsert = jest.fn();

        const todoForm = render(<TodoForm onInsert={onInsert}/>) //props.onInsert를 넘겨준 TodoForm에다 테스트해야함.
        const button = todoForm.getByText('등록');
        const input = todoForm.getByPlaceholderText('할 일을 입력하세요');

        //input에 글 쓰기
        fireEvent.change(input,{
            target:{
                value:'onInsert test'
            }
        });
       
         //등록 버튼 클릭
         fireEvent.click(button);
        expect(onInsert).toBeCalledWith('onInsert test');

        expect(input).toHaveAttribute('value','');

    })

})