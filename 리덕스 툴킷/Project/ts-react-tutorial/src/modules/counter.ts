import { createSlice } from '@reduxjs/toolkit'


// 리덕스에서 관리할 글로벌 상태 타입 선언
type CounterState = {
    count: number;
}

// 초기 상태 만들기
const initialState: CounterState = {
    count: 0
};
const counter = createSlice({
    name: 'counter', //액션 타입의 prefix로 사용
    initialState: initialState,
    reducers: {
        increase(state) {
            state.count++;
        },
        decrease(state) {
            state.count--;
        },
        increaseValue(state, action) {
            state.count = state.count + action.payload;
        },
    }
})

const { actions, reducer } = counter;
export const { increase, decrease, increaseValue } = actions;
export default reducer