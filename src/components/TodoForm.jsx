import React, { Component } from 'react';

class TodoForm extends Component {
    state={
        value : ''
    }

    onChange=(e)=>{
        this.setState({
            value : e.target.value 
        })
    }

    handleInsert = ()=>{
        const { onInsert } = this.props;
        const { value } = this.state;

        onInsert(value);

        this.setState({
            value:''
        })
    }

    render() {
        
        return (
            <div>
                <input placeholder="할 일을 입력하세요" value={this.state.value} onChange={this.onChange}/>
                <button onClick={this.handleInsert}>등록</button>
            </div>
        );
    }
}

export default TodoForm;