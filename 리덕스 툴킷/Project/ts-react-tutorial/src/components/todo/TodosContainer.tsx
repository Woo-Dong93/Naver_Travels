import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../../modules/todos';
import { RootState } from '../../modules';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

function TodosContainer() {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();
    const onInsert = useCallback((text: string) => dispatch(addTodo(text)), [dispatch]);
    const onToggle = useCallback((id: number) => dispatch(toggleTodo(id)), [dispatch]);
    const onRemove = useCallback((id: number) => dispatch(removeTodo(id)), [dispatch]);

    return (
        <>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
        </>
    )
}

export default TodosContainer;