import React, { CSSProperties } from 'react';
import { Todo } from '../../modules/todos';
import TodoItem from './TodoItem';


type TodoListProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}


function TodoList({ todos, onToggle, onRemove}: TodoListProps) {
    
    if (todos.length === 0) return <p>등록한 내용이 존재하지 않습니다.</p>

    return (
       <ul>
           {todos.map(todo => (
                <TodoItem
                    key = {todo.id}
                    todo = {todo}
                    onToggle = {onToggle}
                    onRemove = {onRemove}
                />
           ))}
       </ul>
    )
}

export default TodoList;