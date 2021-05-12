const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

// 액션 생성함수 만들기
let next_id = 1;
export const addTodo = (text: string) => (({
    type: ADD_TODO,
    payload: {
        id: next_id++,
        text
    }
}))
export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id
})
export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: id
})

// 필요한 타입 설정
type TodosAction = 
    | ReturnType<typeof addTodo>
    | ReturnType<typeof toggleTodo>
    | ReturnType<typeof removeTodo>

// 컴포넌트에서도 해당 type을 사용하기 때문에 export 해줍니다.
export type Todo = {
    id: number;
    text: string;
    done: boolean;
}

export type TodosState = Todo[];

// 초기 상태 만들기
const initialState:TodosState = [];
    

// 리듀서 만들기
export default function todos(state: TodosState = initialState, action: TodosAction){
    switch (action.type){
        case ADD_TODO:
            // 타입스크립트로 인하여 모두 유추 가능해집니다.
            return state.concat({
                id: action.payload.id,
                text: action.payload.text,
                done: false
            });
        case TOGGLE_TODO:
            // 여기서도 payload가 숫자라는 것을 유추 해줍니다.
            return state.map(
                todo => todo.id === action.payload ? {...todo, done: !todo.done}
                : todo
            );
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}