// 액션 타입 만들기 : Docks 패턴으로 만들 때 접두사를 넣어줘야 모듈을 합칠 때에 액션 이름 중복을 피할 수 있습니다.
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// 액션 생성함수 만들기
let next_id = 1;
export const addTodo = text => (({
    type: ADD_TODO,
    todo: {
        id: next_id++,
        text
    }
}))
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

// 초기 상태 만들기 : 다양한 타입을 선언할 수 있습니다.
const initialState = [
    // 데이터 양식 : { id: 0, text: 'text', done: false }
]
;

// 리듀서 만들기 : module로 export 합니다.
export default function todos(state = initialState, action){
    switch (action.type){
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map(
                todo => todo.id === action.id ? {...todo, done: !todo.done}
                : todo
            );
        default:
            return state;
    }
}