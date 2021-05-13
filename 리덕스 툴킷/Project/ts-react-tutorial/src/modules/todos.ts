import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// 액션 생성함수 만들기
let next_id = 1;


// 컴포넌트에서도 해당 type을 사용하기 때문에 export 해줍니다.
export type Todo = {
    id: number;
    text: string;
    done: boolean;
}

export type Add = {
    id: number;
    text: string;
}

export type TodosState = Todo[];

// 초기 상태 만들기
const initialState:TodosState = [];
    

// 리듀서 만들기
const counter = createSlice({
    name: 'todo', //액션 타입의 prefix로 사용
    initialState: initialState,
    reducers: {
        removeTodo(state, action) {
            const index = state.findIndex(todo => todo.id === action.payload);
            if(index !== -1) state.splice(index, 1);
        },
        toggleTodo(state, action) {
            const todoToEdit = state.find(todo => todo.id === action.payload);
            if(todoToEdit) todoToEdit.done = !todoToEdit.done;
        },
        addTodo: {
            // 리듀서 함수
            reducer: (state, action: PayloadAction<{ id : number; text: string }>) => {
                state.push({
                    id: action.payload.id,
                    text: action.payload.text,
                    done: false
                })
            },
            prepare: (text: string) => ({
              payload: {
                id: next_id++,
                text
              }
            })
        },
    }
})

const { actions, reducer } = counter;
export const { addTodo, removeTodo, toggleTodo } = actions;
export default reducer